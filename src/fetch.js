const WEATHER_KEY = 'a14892b2ac13cae97fcfdc26fcd3d2a6';

let getMyWeatherInformation = async (city) => {
  let request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${WEATHER_KEY}`);

  let response = await request.json();

  return response
}

let retrieveFlag = (country) => {
  return `https://www.countryflags.io/${country}/shiny/64.png`
}

let weatherDetails = (response) => {
  let obj = {
    city: response.name,
    country: response.sys.country,
    weather: response.weather[0].main,
    temp: response.main.temp,
    feels_like: response.main.feels_like,
    humidity: response.main.humidity,
    flag: retrieveFlag(response.sys.country)
  }

  return obj;
}

let changeBackground = (element, weather = '') => {
  switch(weather.toLowerCase()) {
    case 'clear': 
      element.style.backgroundImage = 'url(../src/images/clear1.jpg)';
      break;
    case 'rain': 
      element.style.backgroundImage = 'url(../src/images/rain1.jpeg)';
      break;
    case 'clouds': 
      element.style.backgroundImage = 'url(../src/images/cloud.jpg)';
      break;      
    case 'snow': 
      element.style.backgroundImage = 'url(../src/images/snow1.jpg)';
      break;    
    case 'thunderstorm': 
      element.style.backgroundImage = 'url(../src/images/thunderstorm.jpg)';
      break;  
    case 'drizzle': 
      element.style.backgroundImage = 'url(../src/images/drizzle.jpg)';
      break;    
    case 'mist': 
      element.style.backgroundImage = 'url(../src/images/mist2.jpg)';
      break;                   
    default:
      element.style.backgroundImage = 'url(../src/images/standard.jpg)';
  }
}

export {getMyWeatherInformation, weatherDetails, changeBackground};