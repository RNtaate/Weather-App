const WEATHER_KEY = 'a14892b2ac13cae97fcfdc26fcd3d2a6';

const getMyWeatherInformation = async (city) => {
  const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${WEATHER_KEY}`, { mode: 'cors' });

  const response = await request.json();

  return response;
};

const retrieveFlag = (country) => `https://www.countryflags.io/${country}/shiny/64.png`;

const weatherDetails = (response) => {
  const obj = {
    city: response.name,
    country: response.sys.country,
    weather: response.weather[0].main,
    temp: response.main.temp,
    feels_like: response.main.feels_like,
    humidity: response.main.humidity,
    flag: retrieveFlag(response.sys.country),
  };

  return obj;
};

const changeBackground = (element, weather = '') => {
  switch (weather.toLowerCase()) {
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
    case 'smoke':
    case 'haze':
      element.style.backgroundImage = 'url(../src/images/mist2.jpg)';
      break;
    default:
      element.style.backgroundImage = 'url(../src/images/standard.jpg)';
  }
};

export { getMyWeatherInformation, weatherDetails, changeBackground };