const WEATHER_KEY = 'a14892b2ac13cae97fcfdc26fcd3d2a6';

let getMyWeatherInformation = async (city) => {
  let request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_KEY}`);

  let response = await request.json();

  return response;
}

let weatherDetails = (response) => {
  let obj = {
    city: response.name,
    country: response.sys.country,
    weather: response.weather[0].main,
    temp: response.main.temp,
    feels_like: response.main.feels_like,
    humidity: response.main.humidity
  }

  return obj;
}

let retrieveFlag = (country) => {
  return `https://www.countryflags.io/${country}/shiny/64.png`
}

export {getMyWeatherInformation, weatherDetails, retrieveFlag};