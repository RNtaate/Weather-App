import "regenerator-runtime/runtime.js";
import {displayForm, displayWeatherDetails, displayNoInformation} from '/src/elements';
import {getMyWeatherInformation, weatherDetails} from '/src/fetch';

let myWeatherObj = {};

let upperSection = document.querySelector('.upper-section');
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
    }
    else {
      detailsDiv.innerHTML = displayNoInformation('No information available!');
    }
  })
  .catch((error) => {
    detailsDiv.innerHTML = displayNoInformation('No information available!');
  })
})