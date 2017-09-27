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

// serve static files
app.use(express.static('public'));

// start the server
app.listen(process.env.PORT, () => {
    c.log('server running on port ' + process.env.PORT);
});
