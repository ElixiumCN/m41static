const express = require("express");
const app = express();

app.use("/static", express.static("public")); //Translates the /static directory and repoints it to the public directory.
// static is defining the route for the browser url
// app.use("/contact", express.static("public/contact.html"));
app.use("/static/myvideos", express.static("public/myvideos.html"));
app.use("/static/contact", express.static("public/contact.html"));
app.use("/static/login", express.static("public/login.html"));
app.use("/static/notepad", express.static("public/notepad.html"));

app.listen(5002, () => {
    console.log("Listening on Port 5002")
})