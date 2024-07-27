const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<html><head><title>Manthan</title></head><body><form action='/product' method='POST'><input type='text' name='title'/><input type='number' name='size'/><button type='submit'>Add Product</button></form></body></html>"
  );
  next();
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

// add path at the begin in use().
// '/' is default
// '/' means the baseUrl should start with that(which means all the url starting with '/' will get executed)
app.use("/", (req, res, next) => {
  res.send("<h1> Welcome to MiddleWares</h1>");
});
app.listen(3000);

// redirect() is a function which directly sets the status and location header
// by default req does not parse the incoming request body
// for parsing this you have to create another middleWare which will come before the routes
// app.get() is same as app.use() but it will only work for get requests
