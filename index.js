let env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    require('dotenv').load();
}
const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path'),
    c = console,

    sequelize = require('./server/config/db.js'),
    app = express();

// connect to the db
sequelize.authenticate().then(() => {
    c.log("Connection has been established successfully!");
}).catch((err) => {
    c.log('Unable to connect to the database', err);
});

// log all requests to the console
app.use(morgan('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the app!',
}));


// serve static files
app.use(express.static('public'));

module.exports = app;