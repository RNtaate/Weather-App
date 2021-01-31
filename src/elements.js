let displayForm = () => {
  let newForm = '<form action="#" method="POST" class="weather-form"><input type="text" placeholder="Search city" required><input type="submit"></form>'

  return newForm;
}

let displayWeatherDetails = (obj) => {
  let detailsDiv = `<div class="weather-details-div">
  <div class="country-name-div"><h1 class="country-heading-h1">${obj.city}, ${obj.country}</h1><img src="${obj.flag}" class="flag-img"></div>

  <div class="weather-info-div">
    <div class="weather-info-left-div temp-div">${obj.temp} &degF</div>
    <div class="weather-info-right-div">
      <span>Weather: ${obj.weather}</span>
      <span>Feels like: ${obj.feels_like}</span>
      <span>Humidity: ${obj.humidity}</span>
    </div>
  </div>
</div>`

  return detailsDiv;
}

let displayNoInformation = () => {
  let par = `<p>NO information available!</p>`

  return par;
}


export {displayForm, displayWeatherDetails, displayNoInformation};