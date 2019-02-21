const cityList = require('../assets/city.list.json');
const responseFormatter = require('../utils/responseFormatter');

module.exports = (req, res, next) => {
  const { citycode } = req.params;
  const result = cityList.filter(({id}) => Number(citycode) === id);

  if(result.length === 0) return responseFormatter(res, 400, "City is not found!", null);

  next();
}