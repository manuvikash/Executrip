const Model = require("../models/Model");

const getReq = async (req, res) => {
  res.status(200).json({ express: "get request" });
};

const getOneReq = async (req, res) => {
  res.status(200).json({ express: `get request with id = ${req.params.id}` });
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

const ModelCreate = async (req, res) => {
  try {
    const newGuide = new Model(req.body);
    const savedGuide = await newGuide.save();
    res.status(201).send({ status: "success", data: savedGuide });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

module.exports = { getReq, postReq, putReq, deleteReq, getOneReq, ModelCreate };
