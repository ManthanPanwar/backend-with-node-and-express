// npm start will only work for start script
// to execute other scripts you have to write npm run scriptName.

// to install 3rd party package we need to write npm install packageName.

// nodemon(development package) is a package which will automatically restart the server if you change something in the file.

// packages can be of 2 types: 1->development packages(packages which helps you during development) and 2->production dependencies(that help you when app is running on the server)
// --save(used for production dependencies) and --save-dev(used for development dependencies) and -g(will install globally so that you can use that package anywhere)

// after installing the nodemon you can directly write 'npm install' to install it again.
// you can delete nodeModules if you are not working on the project and can install it back later.

console.log("some hard coded text");

/* 
The last lectures contained important concepts about available Node.js features and how to unlock them.

You can basically differentiate between:

Global features: Keywords like const or function but also some global objects like process

Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

Global features are always available, you don't need to import them into the files where you want to use them.

Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

Example:

const fs = require('fs');

You can now use the fs object exported by the "fs" module.

Third-party Modules need to be installed (via npm install in the project folder) AND imported.

Example (which you don't need to understand yet - we'll cover this later in the course):

// In terminal/ command prompt
npm install --save express-session
// In code file (e.g. app.js)
const sessions = require('express-session');
*/

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("node\\chatBot.txt", "utf8", (err, data) => {
      res.write("<html>");
      res.write("<head><title>Manthan</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    let readValue;
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("node\\chatBot.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

server.listen(3000);

/* 
In the last lecture, we added nodemon as a local dependency to our project.

The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run npm install in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.

The attached course code snippets also are shared in that way, hence you need to run npm install in the extracted packages to be able to run my code!

I showed that nodemon app.js would not work in the terminal or command line because we don't use local dependencies there but global packages.

You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): npm install -g nodemon would do the trick. Specifically the -g flag ensures that the package gets added as a global package which you now can use anywhere on your machine, directly from inside the terminal or command prompt.
*/
