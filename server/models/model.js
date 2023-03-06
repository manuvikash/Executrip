const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
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
