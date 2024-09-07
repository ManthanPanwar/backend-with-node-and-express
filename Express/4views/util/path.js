// helper function for navigation
// now we don't need to use __dirname in every path.
const path = require("path");

// mainModule refers to the file that starts your application -------> app.js
module.exports = path.dirname(process.mainModule.filename);
