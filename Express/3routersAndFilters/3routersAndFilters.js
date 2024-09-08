const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// now only the routes which start with admin will go to the admin routes
// and it will omit the /admin in the adminRoutes and can directly work with /add-product.
// this filtering mechanism in app.js allows us to put a common starting segment for our path which all routes in a given file use
// so we don't have to repeat in admin.js
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);

// if you use app.use('/') then it will execute for every request which is starting from '/'
// if you use CRUD methods(post, get, patch, put, delete) then it will match the exact url.

/*
The error "TypeError: app.use() requires a middleware function" typically indicates 
that the route handler you're trying to use with app.use() is not correctly defined 
as a middleware function. This often happens if the route modules are not exporting 
the router correctly or if they are not constructed properly.
*/

// you can chain the functions in res but send() has to the last one.
// example: res.status().setHeader().send();
