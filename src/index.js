const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// For environment variables read
require('dotenv').config();
// requiring the database
require('./database');

// Initializations
const app = express();
/*
    Settings
*/
app.set('port', process.env.PORT || 3000);

/*
    Middlewares
*/
// For express to read json
app.use(express.json());
// To communicate the frontend and the backend
app.use(cors());
// HTTP request logger middleware for node.js
app.use(morgan('dev'));

// Read the routes
app.use('/api/', require('./routes/index'));

app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});