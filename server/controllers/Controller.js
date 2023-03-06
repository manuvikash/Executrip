const Guide = require("../models/guide");

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
    const savedGuide = await newGuide.save();
    res.status(201).send({ status: "success", data: savedGuide });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
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
  guidesInCity,
};
