const express = require("express");
const router = express.Router();
const Model = require("../models/Model");
const {
  getReq,
  postReq,
  putReq,
  deleteReq,
  getOneReq,
  ModelCreate,
} = require("../controllers/Controller");

router.get("/", getReq);
router.get("/:id", getOneReq);

router.post("/", postReq);

router.put("/:id", putReq);

router.delete("/:id", deleteReq);

router.post("/post", ModelCreate);

module.exports = router;
