const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes/Routes");
const cors = require("cors");
const expressSession = require("express-session")
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
  name: "testSession",
  resave: false,
  saveUninitialized:false,
  secret: process.env.SESSION_SECRET,
  cookie:
  {
     maxAge: 1000 * 60 * 60 * 24,
  },
}))

const mongoString = process.env.DATABASE_URL;
console.log(mongoString)
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => console.log(error));
database.once("Connected", () => console.log("Connected to Database"));
app.use(cors());
app.use("/api", routes);
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.listen(port, () => console.log(`Server started on port ${port}`));
