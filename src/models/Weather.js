const axios = require('../utils/axios');
const City = require('./City');
const ForecastWeather = require('./ForecastWeather');
const CurrentWeather = require('./CurrentWeather');

class Weather {
  constructor() {}

  getData(city, country, weatherType) {
    // const key = `${city}/co`
    return Promise.all(getWeatherData(city, country)).then(dataArray => getWeatherResult(dataArray, weatherType));
  }

  getDataByCityCode(cityCode, weatherType) {
    console.log("test");
    return Promise.all(getWeatherDataByCityCode(cityCode)).then(dataArray => getWeatherResult(dataArray, weatherType));
  }
}

function getWeatherResult(dataArray, weatherType) {
  const current = dataArray[0].data;
  const forecast = dataArray[1].data;
  const weather = {
    city: new City(forecast.city),
    current: new CurrentWeather(current),
    forecast: forecast.list.map(i => new ForecastWeather(i))
  };
  filterData(weather, weatherType);
  return weather;
}

function filterData(data, weatherType) {
  if (weatherType === 'current') {
    delete data.forecast;
  }
  if (weatherType === 'forecast') {
    delete data.current;
  }
}

function getWeatherData(city, country) {
  const queryString = `${city},${country}`;
  const urls = ['/weather', '/forecast'];
  return urls.map(i => {
    return axios.get(i, { params: { q: queryString } });
  });
}

function getWeatherDataByCityCode(citycode) {
  console.log(citycode);
  const queryString = citycode;
  const urls = ['/weather', '/forecast'];
  return urls.map(url => axios.get(url, { params: { id: queryString } }));
}

module.exports = new Weather();

