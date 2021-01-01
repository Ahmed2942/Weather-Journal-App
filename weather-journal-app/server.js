// Setup an projectData endpoint
let projectData = {};

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
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

// Test server
function listening() {
    console.log("server is running");
}

// get posted data from app.js
app.post("/addData", (req, res) => {
    projectData["temprature"] = req.body.temprature;
    projectData["date"] = req.body.date;
    projectData["content"] = req.body.content;
   //  console.log(projectData);
    res.send(projectData);
})

// handling get request and send project data as  a response
app.get("/all", (req, res) => {
    console.log(projectData);
    res.send(projectData);
})
