// const http = require("http");
// const server = http.createServer((req, res) => {
//   // console.log("manthan", req.url, req.headers);
//   // process.exit(); // hard exited our eventLoop
//   const url = req.url;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>My Node Server</title></head>");
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My Node Server</title></head>");
//   res.write("<body><h1>Welcome to my first Node Server</h1></body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(4000);

const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    return res.end("Welcome Home");
  }
  if (url === "/about") {
    res.write("Welcome to about us page");
    return res.end();
  }
  if (url === "/node") {
    return res.write("Welcome to my node js program");
  }
});

server.listen(4000);
