const express = require("express");
const router = express.Router(); // this Router is a mini_express app tied to other express apps

// the same path name can be used if the methods differ
// if we have same starting segment in the path, we can remove it and add it in the app.js file which will work as filter.
// now only the routes which start with admin will go to the admin routes

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.send(
    "<html><head><title>Manthan</title></head><body><form action='/admin/add-product' method='POST'><input type='text' name='title'/><input type='number' name='size'/><button type='submit'>Add Product</button></form></body></html>"
  );
  next();
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop/");
});

module.exports = router;
