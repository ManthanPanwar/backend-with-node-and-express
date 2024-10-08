const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/user");
const Product = require("./models/product");
const User = require("./models/user");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      // user is a sequelize object and not a normal javascript object
      // console.log("USERISTHIS", user);
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/user", userRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

sequelize // .sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1); // console.log(result);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        username: "boss",
        email: "monu@boss.com",
        phone: 2345,
      });
    }
    return Promise.resolve(user);
  })
  .then((user) => {
    // console.log("USER OF APP", user);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
