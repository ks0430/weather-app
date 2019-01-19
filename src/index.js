// Portect user infomations
const helmet = require('helmet');
// Modules
const express = require('express');
// process in production
const PORT = process.env.PORT || 3000; 
// Configs - before use routes
require('dotenv').config();
const routes = require('./routes');
// Log extraction
const morgan = require('morgan');
// 
const logger = require('../utils/logger');




// Create app instance 
const app = express();


// Portect user infomations
app.use(helmet());
// Log extraction
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
} else {
    app.use(morgan('common'));
}
// Import routes
app.use(routes);



// Start listening
app.listen(PORT,() => logger.info(`Listening on port ${PORT}`));