let env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    require('dotenv').load();
}
const express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    c = console,
    app = express();


// log all requests to the console
app.use(morgan('dev'));

// serve static files
app.use(express.static('public'));

// start the server
app.listen(process.env.PORT, () => {
    c.log('server running on port ' + process.env.PORT);
});
