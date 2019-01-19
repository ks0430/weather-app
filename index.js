const express = require('express');
const app = express();
const port = 3000;

app.get('/',(request,respond)=> {
    respond.send("Hello");
})

app.get('/api/weather/:country',(request,respond)=>{
    const {country} = request.params;
    respond.send(`Country ${country}`);
});

app.listen(port,()=> console.log(`Listening on port ${port}`));