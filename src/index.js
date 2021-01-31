import "regenerator-runtime/runtime.js";
import {displayForm, displayWeatherDetails, displayNoInformation} from '/src/elements';
import {getMyWeatherInformation, weatherDetails} from '/src/fetch';

let myWeatherObj = {};

let upperSection = document.querySelector('.upper-section');

let formDiv = document.createElement('div');
formDiv.innerHTML = displayForm();

upperSection.appendChild(formDiv);

let myForm = document.querySelector('form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('You submitted something cool');

  getMyWeatherInformation(myForm[0].value)
  .then((response) => {
    if(response.main) {
      console.log(response);
      myWeatherObj = weatherDetails(response);

      document.querySelector('.details-div').innerHTML = displayWeatherDetails(myWeatherObj);
    }
    else {
      document.querySelector('.details-div').innerHTML = displayNoInformation();
    }
  })
  .catch((error) => {
    document.querySelector('.details-div').innerHTML = displayNoInformation();
  })
})