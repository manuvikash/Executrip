const express = require("express");
const router = express.Router();
const {
  getReq,
  postReq,
  putReq,
  deleteReq,
} = require("../controllers/Controller");

router.get("/", getReq);

router.post("/", postReq);

router.put("/:id", putReq);

router.delete("/:id", deleteReq);

module.exports = router;
