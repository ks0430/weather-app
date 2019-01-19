const express = require('express');
const axios = require('axios');
const router = express.Router();

const apiEndPoint = 'http://api.openweathermap.org/data/2.5/';
const apiKeys = '7963bc5bb84d4135d81e5332086342a4';

// Related Path
router.get('/:cc/:city',(request,response)=>{
    const {cc,city} = request.params;
    axios.get(`${apiEndPoint}weather?q=${city},${cc}&APPID=${apiKeys}`)
        .then(res => {
            response.send(res.data);
        })
        .catch(err => console.log(err));
});

module.exports = router;