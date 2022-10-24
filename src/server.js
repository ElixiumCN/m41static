const express = require("express");
const app = express();

app.use("/static", express.static("public")); //Translates the /static directory and repoints it to the public directory.
// static is defining the route for the browser url


app.listen(5002, () => {
    console.log("Listening on Port 5002")
})