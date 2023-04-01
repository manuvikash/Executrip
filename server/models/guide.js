const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const guideSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },
  star: {
    type: Number,
    required: true,
    default: 0, // set default value to 0
  },
  rate: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model("Guide", guideSchema);

module.exports = Model;
