const express = require("express");
const router = express.Router();

// /shop/
router.get("/", (req, res, next) => {
  res.send("<h1> Welcome to MiddleWares</h1>");
});

module.exports = router;
