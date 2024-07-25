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
      // fs.readFile("node\\chatBot.txt", "utf8", (err, data) => {
      //   res.statusCode = 200;
      //   res.setHeader("Location", "/");
      //   readValue = data;
      //   res.end(readValue);
      // });
    });
  }
});

server.listen(3000);

// const fs = require("fs");

// fs.readFile("hello.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
