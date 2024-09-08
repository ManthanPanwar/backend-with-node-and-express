const express = require("express");
const router = express.Router();
const { getSuccess } = require("../controllers/success");
router.get("/", getSuccess);

module.exports = router;
