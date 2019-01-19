

// Modules
const express = require('express');
// process in production
const PORT = process.env.PORT || 3000; 
const routes = require('./routes');

// Create app instance 
const app = express();

// Import routes
app.use(routes);

// Start listening
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));