const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactusRoutes = require("./routes/contactusRoutes");
const successRoutes = require("./routes/successRoutes");
const { error404Page } = require("./controllers/error404Page");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use("/contactus", contactusRoutes);
app.use("/success", successRoutes);

// Move 404 handler to the end
app.use(error404Page);

app.listen(3000);
