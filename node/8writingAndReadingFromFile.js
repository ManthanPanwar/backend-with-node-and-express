// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>My Node Server</title></head>");
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/message" && method === "POST") {
//     fs.writeFileSync("node\\message.txt", "MONU BOSS");
//     res.statusCode = 302; // 302 stands for redirection
//     res.setHeader("Location", "/");
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

// ***************************************************
// inserting the input data into txt file which was inserted into the request.
// the incoming data is basically sent as stream of data

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>My Node Server</title></head>");
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/message" && method === "POST") {
//     const body = [];
//     // req.on() listens to incoming data and many other things and it takes a callBack function which will be executed for every data piece.
//     // we recieve a chunk of data
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk); // it simply add the data chunk by chunk.
//     });
//     // now we register another listner that is end eventListener(this will fire once it is done parsing the incoming request data)
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split("=")[1];
//       fs.writeFileSync("node\\message.txt", message);
//     });
//     res.statusCode = 302; // 302 stands for redirection
//     res.setHeader("Location", "/"); // this sets the location at which you want to get redirected.(here it redirects to the baseURL)
//     return res.end(); // if you put return res.end() inside the end->callback function then it will not execute it coz the below code will get executed first and will throw error if you change something later via callback function.
//   }
//   // if you still want to put return res.end() inside end->callback function then you must return the req.on('end', () => {}) itself.
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My Node Server</title></head>");
//   res.write("<body><h1>Welcome to my first Node Server</h1></body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(4000);

// fs.writeFileSync() , here Sync means synchronous which means this will block the execution of the next line of code
// until the file it is creating is created, and even new incoming requests will not be handled until the file is created.

// therefore, you must use fs.writeFile() and it also takes a third argument which is a callback function(function which will get executed
// once the file operation is done) which takes error parameter inside it.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My Node Server</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("node\\message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node Server</title></head>");
  res.write("<body><h1>Welcome to my first Node Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);

// What is the use of having buffers and streams? When would you use it?.
/* 
To handle and manipulate streaming data like a video, a large file, etc., we need streams in node. 
Stream is like a ongoing process and this process is read by node in chunks and in the end at some 
point of time it's done. This is done because so that we can start working on this individual chunks
without having to wait for full process to complete (example, uploading a file). Streams work on a concept called buffer.

A buffer is a temporary memory that a stream takes to hold some data until it is consumed. 
If we try to push some data into the stream, the data is pushed into the stream buffer. 
The pushed data sits in the buffer until the data is consumed.
*/
