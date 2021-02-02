import './stylesheet/styler.css';
import 'regenerator-runtime/runtime';
import {
  displayForm, displayWeatherDetails, displayNoInformation, toggleDegrees,
} from './elements';
import { getMyWeatherInformation, weatherDetails, changeBackground } from './fetch';

let myWeatherObj = {};

const upperSection = document.querySelector('.upper-section');
const lowerSection = document.querySelector('.lower-section');
const detailsDiv = document.querySelector('.details-div');

const formDiv = document.createElement('div');
formDiv.innerHTML = displayForm();

upperSection.appendChild(formDiv);
detailsDiv.innerHTML = displayNoInformation('Welcome!!, Please enter a city');

const myForm = document.querySelector('form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  getMyWeatherInformation(myForm[0].value)
    .then((response) => {
      if (response.main) {
        myWeatherObj = weatherDetails(response);

        detailsDiv.innerHTML = displayWeatherDetails(myWeatherObj);
        changeBackground(lowerSection, myWeatherObj.weather);
        toggleDegrees();
      } else {
        detailsDiv.innerHTML = displayNoInformation('No information available!');
        changeBackground(lowerSection);
      }
    })
    .catch(() => {
      detailsDiv.innerHTML = displayNoInformation('Something went wrong, try again!!');
      changeBackground(lowerSection);
    });
});