const WEATHER_KEY = 'a14892b2ac13cae97fcfdc26fcd3d2a6';

const getMyWeatherInformation = async (city) => {
  const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${WEATHER_KEY}`, { mode: 'cors' });

  const response = await request.json();

  return response;
};

const retrieveFlag = (country) => `https://flagsapi.com/${country}/shiny/64.png`;

const weatherDetails = (response) => {
  const obj = {
    city: response.name,
    country: response.sys.country,
    weather: response.weather[0].main,
    temp: response.main.temp,
    feels_like: response.main.feels_like,
    humidity: response.main.humidity,
    flag: retrieveFlag(response.sys.country)
  };

  console.log(response)
  return obj;
};

const changeBackground = (element, weather = '') => {
  switch (weather.toLowerCase()) {
    case 'clear':
      element.style.backgroundImage = 'url(./images/clear13bf802.jpg)';
      break;
    case 'rain':
      element.style.backgroundImage = 'url(./images/rain1fbf9e2.jpeg)';
      break;
    case 'clouds':
      element.style.backgroundImage = 'url(./images/cloud0cf4b7.jpg)';
      break;
    case 'snow':
      element.style.backgroundImage = 'url(./images/snow1c5e7fe.jpg)';
      break;
    case 'thunderstorm':
      element.style.backgroundImage = 'url(./images/thunderstorm8ea698.jpg)';
      break;
    case 'drizzle':
      element.style.backgroundImage = 'url(./images/drizzle67d970.jpg)';
      break;
    case 'mist':
    case 'smoke':
    case 'haze':
      element.style.backgroundImage = 'url(./images/mist2d9c2a8.jpg)';
      break;
    default:
      element.style.backgroundImage = 'url(./images/standard1ae7b2.jpg)';
  }
};

export { getMyWeatherInformation, weatherDetails, changeBackground };