// Configs
const express = require('express');
const router = express.Router();
const weatherRoutes = require('./routes/weather');
const responseFormatter = require('./utils/responseFormatter');

// Routes
router.get('/',(request,respond)=> {
    responseFormatter(
        respond,
        200,
        'Welcome to the weather api! Visit /api-docs for help',
        null
      )
});

router.use('/api/weather',weatherRoutes);


// Exports
module.exports = router;