// express js does all the heavy lifting.
// express js package is a production dependency.

// express js is all about middleware.

// const http = require("http");

const express = require("express");

// creating an express application and storing it in a variable.
const app = express();
// app has all the express code
// app is also a valid request handler
app.use((req, res, next) => {
  // "next" is a function will allow the request to travel to the next middleWare.
  console.log("In the Middleware");
  next();
}); // use() allows us to add a new MiddleWare function.
// use() accepts array of requestHandlers
// the function that is passed into the use() will execute for every incoming request.
app.use((req, res, next) => {
  console.log("Another middleware");
  // res.send("<h1>Hello From Express JS</h1>"); // use to send the response of type: any.
  res.send({ key1: "value1" }); // content-type: application/json
  // with send() method we dont have to do additional things like setting header
  // ...
});

// const server = http.createServer(app);
// server.listen(4000);
// the above 2 lines can be written in short form
app.listen(4000); // and due to this line we can remove http import.

/*
1) With nodeJS alone, we have to write code for lot of basic things. We don't want to do this instead we want to focus on business logic , code that makes our specific application. We don't want to care about standard task like handling incoming request, or routing, executing different code for different paths and url. ExpressJS is a framework which helps us outsourcing the details or task we dont care about. It gives us helper function. tools, rules that helps us building application.



3) Middleware means that incoming request will be funneled through bunch of functions by expressJS. So instead of having one request handler, we will have multiple function through which request goes until we send a request. This is pluggable nature of expressJS where we can easily add third party packages which happen to give as such middleware functions and adds different functionalities.



4) next is a function which is passed as an arguments in use() function which takes three arguments (req,res,next). This next function needs to be executed to allow your request to travel to next middleware. [ use() allows us to add a new middleware function]. if we dont call next(), request will die and will not continue to next middleware.



5) send() allows us to send response. this allows us to attach body which is of type any. Automatically setHeader content-type for us. res.send() sends back the response which means we can't move on to next middleware.



6) text/html

7) application/JSON



8) app.listen creates the server and listen.   behind the scene it executes two lines of code   const server=http.createServer(app); serve.listen(localhost);
*/
