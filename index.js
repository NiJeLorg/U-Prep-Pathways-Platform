'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './server/routes/index';
import morgan from 'morgan';

let env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    require('dotenv').load();
}
const c = console,
    app = express();


// log all requests to the console
app.use(morgan('dev'));

// parse incoming requests data
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: false
}));
routes(app);
// serve static files
app.use(express.static(path.resolve('./public')));

// Setup a default catch-all route that sends back the index.html page
app.get('*', (req, res) => {
    res.sendFile('index.html', {
        root: './public'
    });
});

// Start the server
console.log(process.env.PORT);
app.listen(process.env.PORT || 3000, () => {
    c.log('server listening on port ' + process.env.PORT || 3000);
    // console.log(app._router.stack);
});

module.exports = app;
