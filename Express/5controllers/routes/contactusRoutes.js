const express = require("express");
const router = express.Router();
const { getContactUs, postContactUs } = require("../controllers/contactus");

router.get("/", getContactUs);

router.post("/", postContactUs);

module.exports = router;
