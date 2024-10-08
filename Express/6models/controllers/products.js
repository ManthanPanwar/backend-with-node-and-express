// const products = [];
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

// exports.getProducts = (req, res, next) => {
//   // const products = adminData.products;
//   const products = Product.fetchAll((products) => {
//     res.render("shop", {
//       prods: products,
//       pageTitle: "Shop",
//       path: "/",
//       hasProducts: products.length > 0,
//       activeShop: true,
//       productCSS: true,
//     });
//   });
// };

// Promise code
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("shop", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
      });
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      res.render("shop", {
        prods: [],
        pageTitle: "Shop",
        path: "/",
        hasProducts: false,
        activeShop: true,
        productCSS: true,
      });
    });
};
