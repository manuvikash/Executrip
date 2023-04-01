const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const Guide = require("./models/guide");
const User = require("./models/testuser");
const bcrypt = require("bcrypt");

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'verysecret',
    resave: false,
    saveUninitialized:false
}))

const mongoString = process.env.DATABASE_URL;
console.log(mongoString);
mongoose.connect(mongoString);
const database = mongoose.connection;

app.get("/", (req,res) => {
    req.session.isAuth = true;
    console.log(req.session.id)
    res.send("hello")
})


app.get("/api/login", async (req,res) => {
    req.session.isAuth = true;
    console.log(req.query.email)
    const user = await User.findOne({mail: req.query.email});
    if (!user){
        return res.status(404).json({message:"User does not exist"})
    }


    const pwCheck = await bcrypt.compare(req.query.password, user.pw);

    if(!pwCheck){
        return res.status(401).json({message: 'pw is wrong'})
    }


    req.session.user = user.uname;
    console.log(req.session.id)
    console.log(req.session.user)
    // console.log(req.session.id)
    res.json({message: "Logged In"}) 
})

app.post("/api/addguide", async (req,res) => {
    try {
        const newGuide = new Guide(req.body);
        console.log(newGuide);
        const savedGuide = await newGuide.save();
        res.status(201).send({ status: "success", data: savedGuide });
      } catch (err) {
        res.status(500).send({ status: "error", message: err.message });
      }
})

app.post("/api/adduser", async (req,res) => {
    try {
        const hashedPw = await bcrypt.hash(req.body.password,12);
        const temp = {
          uname: req.body.username,
          mail:req.body['email-address'],
          pw: hashedPw,
        }; 
        const newUser = new User(temp); 
        const savedUser = await newUser.save();
        res.status(201).send({ status: "success", data: savedUser });
        req.session.userId = newUser.uname;
      } catch (err) {
        console.log(err.message)
        res.status(500).send({ status: "error", message: err.message });
      }
})

app.post("/api/logout", async (req,res) => {
    delete req.session.user;
    res.json({message: "logged out"})
})


app.get("/api/guide/:id", async (req,res) => {
    const guideId = req.params.id;
    Guide.findOne({ id: req.params.id })
    .exec()
    .then((guide) => {
      res.json(guide);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
})

app.get("/api/guides/:city", async (req,res) => {
    try {
        console.log(req.session.user)
        console.log(req.session.id)
        const city = req.params.city;
        const guides = await Guide.find({ city: city });
        // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        // res.setHeader("Access-Control-Allow-Credentials", "true");
        res.status(200).send(guides);
      } catch (err) {
        res.status(500).send(err);
      }
})

app.listen(5000,console.log("server running"));
