import { celToFah, fahToCel } from './tempConversion';

const displayForm = () => {
  const newForm = '<form action="#" method="POST" class="weather-form"><input type="text" placeholder="Search city" required><input type="submit" value="Fetch"></form>';

  return newForm;
};

const displayWeatherDetails = (obj) => {
  const detailsDiv = `<div class="weather-details-div">
  <div class="country-name-div"><h2 class="country-heading-h2">${obj.city}, ${obj.country}</h2><img src="${obj.flag}" class="flag-img"></div>

  <div class="weather-info-div">
    <div class="weather-info-left-div"><span class="temp-div">${obj.temp.toFixed(1)}</span> <span class="temp-unit-span">&degF</span>
      <div class="toggle-wrapper">
        <input type="checkbox" class="my-checkbox" id="checkbox">
        <label class="toggle-label" for="checkbox">
          <b class="fas fa-moon">&degF</b>
          <b class="fas fa-sun">&degC</b>
          <div class="ball"></div>
        </label>
      </div>
    </div>
    <div class="weather-info-right-div">
      <span>Weather : ${obj.weather}</span>
      <span>Feels like : ${obj.feels_like}</span>
      <span>Humidity : ${obj.humidity}</span>
    </div>
  </div>
</div>`;

  return detailsDiv;
};

const displayNoInformation = (content) => {
  const par = `<p class="no-info-p">${content}</p>`;

  return par;
};

const toggleDegrees = () => {
  const toggle = document.querySelector('.my-checkbox');

  toggle.addEventListener('change', () => {
    const changer = document.querySelector('.temp-div');
    const units = document.querySelector('.temp-unit-span');
    const celToggle = document.querySelector('.cel-toggle');

    if (celToggle === null) {
      const celTemp = fahToCel(Number(changer.textContent));
      changer.textContent = celTemp.toFixed(1);
      units.innerHTML = '&degC';
    } else {
      const fahTemp = celToFah(Number(changer.textContent));
      changer.textContent = fahTemp.toFixed(1);
      units.innerHTML = '&degF';
    }

    changer.classList.toggle('cel-toggle');
  });
};


export {
  displayForm, displayWeatherDetails, displayNoInformation, toggleDegrees,
};