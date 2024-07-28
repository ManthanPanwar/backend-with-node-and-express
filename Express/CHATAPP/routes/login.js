const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    `<html><head></head>
    <body><form 
    id='form'
    onsubmit = "storeUsername(event)"
     action='/login' 
     method='POST'>
     <input id='username' type='text' name='username'/>
     <button type='submit'>Login</button></form>
     <script>
        function storeUsername(event){
          event.preventDefault();
          localStorage.setItem('username', document.getElementById('username').value);
          document.querySelector('#form').submit();
        }
     </script>
     </body></html>`
  );
  next();
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.redirect("/message");
});

module.exports = router;

// why it is not storing in the localStorage?
// onsubmit='localStorage.setItem('userName', document.getElementById('userName').value)'

// problem:
/* 
The issue lies in how the onsubmit event and the form submission are handled. 
The onsubmit event is fired when the form is submitted, but the form submission 
might complete before the localStorage.setItem function has a chance to execute properly.

To ensure that the localStorage.setItem function executes and stores the value before the form 
submission occurs, you can prevent the default form submission behavior using event.preventDefault(). 
Then, manually submit the form after storing the value.

[
`<html>
       <head></head>
       <body>
         <form 
           id="loginForm"
           onsubmit="storeUsername(event)"
           action="/login" 
           method="POST">
           <input id="username" type="text" name="username" />
           <button type="submit">Login</button>
         </form>
         <script>
           function storeUsername(event) {
             event.preventDefault();
             const username = document.querySelector('#username').value;
             localStorage.setItem('username', username);
             document.querySelector('#loginForm').submit();
           }
         </script>
       </body>
     </html>`
]
*/
