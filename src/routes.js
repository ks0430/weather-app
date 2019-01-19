// Configs
const express = require('express');
const router = express.Router();
const weatherRoutes = require('./routes/weather');

// Routes
router.get('/',(request,respond)=> {
    respond.send("Welcome to weather API!");
});

router.use('/api/weather',weatherRoutes);


// Exports
module.exports = router;