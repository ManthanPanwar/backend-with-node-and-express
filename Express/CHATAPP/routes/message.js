const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/message", (req, res, next) => {
  fs.readFile("check.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat exists  ";
    }

    res.send(
      `<html>
         <head><title>Manthan</title></head>
         <body>
           <div>${data.replace(/\n/g, "<br>")}</div>
           <form id="form" onsubmit='getUsername(event)' action='/message' method='POST'>
             <input type='text' name='message' required />
             <input id="username" type='hidden' name='username' />
             <button type='submit'>Send</button>
           </form>
           <script>
             function getUsername(event) {
               event.preventDefault();
               document.querySelector('#username').value = localStorage.getItem('username');
               document.querySelector('#form').submit();
             }
           </script>
         </body>
       </html>`
    );
  });
  // res.send(
  //   `<html><head><title>Manthan</title></head><body>
  //   <form id="form" onsubmit='getUsername(event)'
  //   action='/message' method='POST'>
  //   <input type='text' name='message'/>
  //   <input id="username" type='hidden' name='username'/>
  //   <button type='submit'>Send</button>
  //   </form>
  //   <script>
  //   function getUsername(event){
  //     event.preventDefault();
  //     document.querySelector('#username').value = localStorage.getItem('username');
  //     document.querySelector('#form').submit();
  //   }
  //   </script>
  //   </body></html>`
  // );
});

router.post("/message", (req, res, next) => {
  const username = req.body.username;
  const message = req.body.message;
  const logEntry = `${username}: ${message}\n`;

  // Append the log entry to the file
  fs.appendFile("check.txt", logEntry, (err) => {
    if (err) {
      console.error("Error appending data to file:", err);
    }
  });

  res.redirect("/message");
});

module.exports = router;
