const Guide = require("../models/guide");
const User = require("../models/testuser");
const Val = require("../validators/register");
const bcrypt = require("bcrypt");

const getReq = async (req, res) => {
  res.status(200).json({ express: "get request" });
};

const postReq = async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "text is required" });
  } else {
    console.log(req.body);
    res.status(200).json({ express: `post request with body ${req.body}` });
  }
};

const putReq = async (req, res) => {
  res.status(200).json({ express: `Put req with id = ${req.params.id}` });
};

const deleteReq = async (req, res) => {
  res.status(200).json({ express: `Delete req with id = ${req.params.id}` });
};

const AddGuide = async (req, res) => {
  try {
    const newGuide = new Guide(req.body);
    console.log(newGuide);
    const savedGuide = await newGuide.save();
    res.status(201).send({ status: "success", data: savedGuide });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const AddUser = async (req, res) => {
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
};

const findUser = async (req, res) => {
  console.log(req.body)
  const user = await User.findOne({mail: req.body['email-address']});
  if (!user){
    return res.status(404).json({message:"User does not exist"})
  }


  const pwCheck = await bcrypt.compare(req.body.password, user.pw);

  if(!pwCheck){
    return res.status(401).json({message: 'pw is wrong'})
  }


  req.session.userId = user.uname;
  res.json({message: "Logged In"}) 

};

const logout = (req,res) => {
  delete req.session.userId;
  res.json({message: "logged out"})
};



const guidesInCity = async (req, res) => {
  try {
    const city = req.params.city;
    const guides = await Guide.find({ city: city });
    res.status(200).send(guides);
  } catch (err) {
    res.status(500).send(err);
  }
};

const guideByID = async (req, res) => {
  const guideId = req.params.id;
  Guide.findOne({ id: req.params.id })
    .exec()
    .then((guide) => {
      res.json(guide);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  getReq,
  postReq,
  putReq,
  deleteReq,
  guideByID,
  AddGuide,
  AddUser,
  findUser,
  logout,
  guidesInCity,
};
