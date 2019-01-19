const axios = require('axios');

const instance = axios.create ({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    params: {
        APPID: process.env.APPID,
        units: 'metric'
    }
})

module.exports = instance;