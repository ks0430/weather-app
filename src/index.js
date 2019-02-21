// Cors browsers
const cors = require('cors');
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
// Logger utilities
const logger = require('./utils/logger');
// Notfound page 
const notFoundHandler = require('./middlewares/notFound');
// Error middlewares
const errorHandler = require('./middlewares/errorHandler');


// Create app instance 
const app = express();

// Middleware
app.use(cors());
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
// Error
app.use(errorHandler);
// Not found routes
app.use(notFoundHandler);


// Start listening
app.listen(PORT,() => logger.info(`Listening on port ${PORT}`));