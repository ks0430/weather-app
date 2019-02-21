const express = require('express');
const router = express.Router();
const cityListValidator = require('../middlewares/cityListValidator');
const CityList = require('../models/CityList');
const responseFormatter = require('../utils/responseFormatter');


router.get('/:city', cityListValidator, (req, res, next) => {
  // After middleware, city is filtered to city list.
  const { city } = req.params;
  const cityList = city.map(city => new CityList(city))

  responseFormatter(res, 200, null, cityList);
})

module.exports = router;