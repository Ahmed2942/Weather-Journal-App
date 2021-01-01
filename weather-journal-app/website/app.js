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

// select entry
const tempBox = document.querySelector("#temp");
const dateBox = document.querySelector("#date");
const contentBox = document.querySelector("#content");

// clicking on generate
generateBtn.addEventListener("click", function() {
    zipCode = document.querySelector("#zip").value;
    const userInput = document.querySelector("#feelings").value;
    const finalURI = baseURI + zipCode + countryCode + measureUnit + apiKey;
    getData(finalURI).then(data => {
        console.log(data.main.temp);
        return postData("/", {temprature: data.main.temp, date: newDate, content: userInput});
    }).then(updateUI);
})

// action!!!!!
const getData = async (url = "") => {
    const response = await fetch(url);
    try {
        let newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch {
        console.log("error here");
    }
}

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
        console.log(newData);
        return newData;
    }
    catch {
        console.log("error here");
    }
}

function updateUI(data) {
    tempBox.textContent = data[data.length-1].temprature;
    dateBox.textContent = data[data.length-1].date;
    contentBox.textContent = data[data.length-1].content;
}