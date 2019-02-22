const cityList = require('../assets/city.list.json');
const responseFormatter = require('../utils/responseFormatter');

module.exports = (req, res, next) => {
  const { city } = req.params;
  const result = cityList.filter(item => item.name.toLowerCase().includes(city.toLowerCase()));
  // console.log(result);

  // If city name can not be found
  if(result.length === 0) {
    // console.log("not found");
    return responseFormatter(res, 400, "City name can not be found!", null);
  }

  // Delete duplicated cities
  // Keep the first value
  const filteredCityList = 
    result
    .map(city => city['country'])
    .map((city, i, indexArr) => indexArr.indexOf(city) === i && i) // If appear index is equal tp the index of itself, then keep this one.
    .filter(cityIndex => result[cityIndex]) // filtered false value, when result[false] === false
    .map(cityIndex => result[cityIndex]);

  // console.log("test filtered", filteredCityList);

  req.params.city = filteredCityList;

  next();
}