// core modules: http(launch a server, send requests), https(launch a SSL( Secure Sockets Layer) server), path, os, fs

// import http
// const http = require('./http.js')  // for importing local file
const http = require("http");

// const rqListener(req, res){}
// createServer() returns a server
const server = http.createServer((req, res) => {
  console.log(req);
}); // createServer takes requestListener as argument(requestListener is a function that will execute for every incoming request)

server.listen(4000);

/*
1Explain how does the internet work in your own words.
2What are the core modules of node js?
3Explain the use of each one of them in detail.
4What are relative path and absolute path? How to define them?
5What does createServer do?
6What are anonymous functions?
7What do you think server.listens exactly do?Why do we need it?
*/

/*
1) Client or user is there on browser who then enter the URL in form of (http://.....) .This entered URL will lead to some server. Therefore browser sends a request to that server with that given IP address (IP address belonging to that server). We write the NODEJS code that runs on that computer in internet which has that IP address. Response is sent back from server in the form of HTML page or just data in JSON/XML format.



2) core modules:

http

https

fs

os

path



3) http: helps in launching the server and sending requests.

fs: provides functionality to access and interact with file system.

os: this modules provides functions that we can use to retrieve information from underlying Operating system and the computer the program runs on, and interact with it .

Path: helps us with constructing path. Path to files on a file system that works on any OS.

4) path start with ./ is relative path.

path start with / is absolute path.

The path with reference to root directory is called absolute. The path with reference to current directory is called relative. In Relative paths we take as reference the current working directory while with absolute paths we refer to a certain, well known directory.



5) CreateServer is function which takes request listener as argument. A request listener is a function that will execute for every incoming request. Request listener function has to receive two arguments. A request listener receives a request which of type incoming request and a Response object. NODEJS automatically gives us some object that represents the incoming request and allows us to read data from that incoming request and it gives the object Response, which we can use to return a response to whoever sent that request.



6) functions without name are anonymous functions. They are used to assign function to a variable or to pass function as a Callback.



7) createServer method returns the server. We can store it in variable and call server.listen() method. This method starts a process where NODEjs will not immediately exit our script but where nodejs will instead keep this running to listen for incoming request. listen takes some arguments. First one is port on which you want to listen. we can also define hostName , by default this will be the name of machine this is running on. so for our local machine this is localHost by default.
*/
