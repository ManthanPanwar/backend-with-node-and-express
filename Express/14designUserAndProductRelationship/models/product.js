const { Sequelize, DataTypes } = require("sequelize"); // gives constructor function
const sequelize = require("../util/database");

// model name & structure of our model
const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: DataTypes.STRING, // directly assigning the type
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// DataTypes contains all the datatypes of sql.

module.exports = Product;
