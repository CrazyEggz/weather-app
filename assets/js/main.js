const apiKey = "7f8b33568bb89380ec444071a6853bb7";
const units = "metric"

const cityNameEle = document.getElementById("city-name");
const currentConditionImgEle = document.getElementById("current-condition-img");
const currentConditionEle = document.getElementById("current-condition");
const currentTempEle = document.getElementById("current-temp");
const cityInputEle = document.getElementById("city-input");
const submitBtnEle = document.getElementById("submit-btn");
const forcastArea = document.getElementById("forcast-container");

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=${apiKey}&units=${units}`;

fetch(apiURL)
    .then(response => response.json())
    .then(data => console.log(data));