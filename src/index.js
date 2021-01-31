import "regenerator-runtime/runtime.js";
import {displayForm, displayWeatherDetails, displayNoInformation, toggleDegrees} from '/src/elements';
import {getMyWeatherInformation, weatherDetails, changeBackground} from '/src/fetch';
import {celToFah, fahToCel} from '/src/tempConversion';

let myWeatherObj = {};

let upperSection = document.querySelector('.upper-section');
let lowerSection = document.querySelector('.lower-section');
let detailsDiv = document.querySelector('.details-div');

let formDiv = document.createElement('div');
formDiv.innerHTML = displayForm();

upperSection.appendChild(formDiv);
detailsDiv.innerHTML = displayNoInformation('Welcome!!, Please enter a city');

let myForm = document.querySelector('form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('You submitted something cool');

  getMyWeatherInformation(myForm[0].value)
  .then((response) => {
    if(response.main) {
      console.log(response);
      myWeatherObj = weatherDetails(response);

      detailsDiv.innerHTML = displayWeatherDetails(myWeatherObj);
      changeBackground(lowerSection, myWeatherObj.weather);
      toggleDegrees();
    }
    else {
      detailsDiv.innerHTML = displayNoInformation('No information available!');
      changeBackground(lowerSection);
    }
  })
  .catch((error) => {
    detailsDiv.innerHTML = displayNoInformation('Something went wrong, try again!!');
    changeBackground(lowerSection);
  })
})