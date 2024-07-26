const fs = require("fs");

const requestHandler = (req, res) => {
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
};

// there are 4 ways to export:

// 1st:
// module.exports = requestHandler;

// 2nd:
// module.exports = {
//   handler: requestHandler,
//   someText: "some hard text",
// };

// 3rd:
// module.exports.handler = requestHandler;
// module.exports.someText = "some hard";

// 4th:
exports.handler = requestHandler;
exports.someText = "some hard";
