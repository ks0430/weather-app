

// Configs
const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const apiEndPoint = 'http://api.openweathermap.org/data/2.5/';
const apiKeys = '7963bc5bb84d4135d81e5332086342a4';

// Route Setting
app.get('/',(request,respond)=> {
    respond.send("Welcome to weather API!");
})

app.get('/api/weather/:cc/:city',(request,respond)=>{
    const {cc,city} = request.params;
    axios.get(`${apiEndPoint}weather?q=${city},${cc}&APPID=${apiKeys}`)
        .then(response => {
            respond.send(response.data);
        })
        .catch(err => console.log(err));
});

// Start listening
app.listen(port,() => console.log(`Listening on port ${port}`));