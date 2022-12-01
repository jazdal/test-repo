// Variable Declaration Block
var cookieBox = document.querySelector(".bottom");

var  maxTempC = ["24°", "27°", "21°", "26°"];
var maxTempF = ["75°","80°","69°","78°"];

var maxTemp1 = document.querySelector("#maxTemp1");
var maxTemp2 = document.querySelector("#maxTemp2");
var maxTemp3 = document.querySelector("#maxTemp3");
var maxTemp4 = document.querySelector("#maxTemp4");
var maxTemp = [maxTemp1, maxTemp2, maxTemp3, maxTemp4];

var minTempC = ["18°", "19°", "16°", "21°"];
var minTempF = ["65°","66°","61°","70°"];

var minTemp1 = document.querySelector("#minTemp1");
var minTemp2 = document.querySelector("#minTemp2");
var minTemp3 = document.querySelector("#minTemp3");
var minTemp4 = document.querySelector("#minTemp4");
var minTemp = [minTemp1, minTemp2, minTemp3, minTemp4];

// Function Block
function dispmsg() {
    alert("Loading weather report...");
}

function disappear() {
    cookieBox.remove();
}

function select(element) {
    if (element.value == "°F") {
        convertF();
    } else {
        convertC();
    }
}

function convertF() {
    for (var i = 0; i < 4; i ++) {
        maxTemp[i].innerText = maxTempF[i];
        minTemp[i].innerText = minTempF[i];
    }
}

function convertC() {
    for (var i = 0; i < 4; i ++) {
        maxTemp[i].innerText = maxTempC[i];
        minTemp[i].innerText = minTempC[i];
    }
}