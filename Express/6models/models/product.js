// // const products = [];
// const fs = require("fs");
// const path = require("path");

// module.exports = class Product {
//   constructor(title) {
//     this.title = title;
//   }
//   save() {
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       "data",
//       "products.json"
//     );
//     fs.readFile(p, (err, fileContent) => {
//       let products = [];
//       if (!err) {
//         products = JSON.parse(fileContent);
//       }

//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), (err) => {
//         console.log(err);
//       });
//     });
//   }

//   // static fetchAll(cb) {
//   //   const p = path.join(
//   //     path.dirname(process.mainModule.filename),
//   //     "data",
//   //     "products.json"
//   //   );
//   //   fs.readFile(p, (err, fileContent) => {
//   //     if (err) {
//   //       cb([]);
//   //     }
//   //     cb(JSON.parse(fileContent));
//   //   });
//   // }

//   // promise code
//   static fetchAll() {
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       "data",
//       "products.json"
//     );
//     return new Promise((resolve, reject) => {
//       fs.readFile(p, (err, fileContent) => {
//         if (err) {
//           return resolve([]);
//         }
//         try {
//           const products = JSON.parse(fileContent);
//           resolve(products);
//         } catch (parseErr) {
//           reject(parseErr);
//         }
//       });
//     });
//   }
// };

// slimmer code
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return resolve([]);
      }
      try {
        const products = JSON.parse(fileContent);
        resolve(products);
      } catch (parseErr) {
        reject(parseErr);
      }
    });
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile().then((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    return getProductsFromFile(); // return the promise so that we can perform .then on it
  }
};
