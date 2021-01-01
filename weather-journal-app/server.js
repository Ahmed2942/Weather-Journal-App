// Setup an array to become as a projectData endpoint to store objects
let projectData = [];

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

// Test server
function listening() {
    console.log("server is running");
}

// getData
app.post("/", (req, res) => {
    console.log("server now");
    let newEntry = {};
    newEntry["temprature"] = req.body.temprature;
    newEntry["date"] = req.body.date;
    newEntry["content"] = req.body.content;
    projectData.push(newEntry);
    console.log(projectData);
    res.send(projectData);
})


