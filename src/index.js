import "regenerator-runtime/runtime.js";
import displayForm from '/src/elements';
import {getMyWeatherInformation, weatherDetails} from '/src/fetch';

let upperSection = document.querySelector('.upper-section');

let formDiv = document.createElement('div');
formDiv.innerHTML = displayForm();

upperSection.appendChild(formDiv);