
const express = require('express');
const axios = require('../utils/axios');
const weather = require('../models/Weather');
const responseFormatter = require('../utils/responseFormatter');
const countryValidator = require('../middlewares/countryValidator');
const cityCodeValidator = require('../middlewares/cityCodeValidator');

const router = express.Router();
const APPID = process.env.APPID;

router.get('/:cc/:city', countryValidator, (req, res, next) => {
  const { cc, city } = req.params;
  const weatherType = req.query.weatherType;

  weather
    .getData(city, cc, weatherType)
    .then(response => responseFormatter(res, 200, null, response))
    .catch(err => next(err));
});


router.get('/:citycode', cityCodeValidator, (req, res, next) => {
  const { citycode } = req.params;
  const weatherType = req.query.weatherType;

  weather.getDataByCityCode(citycode, weatherType)
    .then(response => responseFormatter(res, 200, null, response))
    .catch(err => next(err));
})

module.exports = router;