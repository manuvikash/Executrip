const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.disable("x-powered-by");

//HTTP get request

app.get("/", (req, res) => {});
