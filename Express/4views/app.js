const express = require("express");
const app = express();
const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");
const contactusRoutes = require("./routes/contactusRoutes");
const path = require("path");
const rootDir = require("./util/path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use("/", shopRoutes);
app.use("/contactus", contactusRoutes);
app.post("/success", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "contactUsFormFilled.html"));
});
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "PageNotFound.html"));
});

app.listen(3000);

/* 
Deliverables

Watch videos from 14 to 20 

Clean up all the HTML that you wrote and move it views folder.

Add a view for returning "Page not found" with response header as 404 when user hits wrong url.

Use path helper function (path.dir) to make ur project structure even better, so that it works on every OS possible.

Add some styling watching the video number 21.

Watch video number 22 and serve all the css statically as its pointless to rewrite stylesheets in every html page
*/

/*
Projects

Add one more button on the navbar called Contact Us.

When user clicks on that , take them to url='/contactus' and show them a form like this Only take name and email id. 

Once the user fills the details take them to another url = '/success' and show them a message "Form successfuly filled".

Push the final code to git and upload the commit ID.
*/
