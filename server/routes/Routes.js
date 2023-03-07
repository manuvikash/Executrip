const express = require("express");
const router = express.Router();
const Model = require("../models/guide");
const {
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
} = require("../controllers/Controller");

//Test routes
router.get("/", getReq);

router.post("/", postReq);

router.put("/:id", putReq);

router.delete("/:id", deleteReq);

//Actual routes
router.get("/guide/:id", guideByID);

router.post("/addguide", AddGuide);

router.post("/adduser", AddUser);

router.post("/login", findUser)

router.post("/logout",logout)

router.get("/guides/:city", guidesInCity);

router;

module.exports = router;
