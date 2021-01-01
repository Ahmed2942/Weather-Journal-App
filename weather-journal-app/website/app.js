/* Global Variables */
const baseURI = "http://api.openweathermap.org/data/2.5/weather?zip=";
let zipCode;
const countryCode = ",us";
const apiKey = "&appid=6c7a979cf776e840d8fd1272ec57bc4b";
const measureUnit = "&units=metric";
// Select generate button
const generateBtn = document.querySelector("#generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1) +'.'+ d.getDate()+'.'+ d.getFullYear();

// select entry boxes
const tempBox = document.querySelector("#temp");
const dateBox = document.querySelector("#date");
const contentBox = document.querySelector("#content");

// clicking on generate
generateBtn.addEventListener("click", function() {
    zipCode = document.querySelector("#zip").value;
    const userInput = document.querySelector("#feelings").value;
    const finalURI = baseURI + zipCode + countryCode + measureUnit + apiKey;
    getData(finalURI).then(data => postData("/addData", {temprature: data.main.temp, date: newDate, content: userInput}))
    .then(updateUI)
})

// get data from api
const getData = async (url = "") => {
    const response = await fetch(url);
    try {
        let newData = await response.json();
        return newData;
    }
    catch(error) {
        console.log("error in getting data from api: ", error);
    }
}

// post data to server
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    try {
        let newData = await response.json();
        return newData;
    }
    catch(error) {
        console.log("error in sending data to server: ", error);
    }
}

// get data from server endpoint
const updateUI = async() => {
    const allData = await fetch("/all");
    console.log(allData);
    try {
        const newData = await allData.json();
        tempBox.innerHTML = newData.temprature;
        dateBox.innerHTML = newData.date;
        contentBox.innerHTML = newData.content;
    }
    catch(error) {
        console.log("error in getting data from server: ", error)
    }
}
