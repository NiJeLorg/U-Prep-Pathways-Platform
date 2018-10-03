const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const methodOverride = require('method-override')
const cors = require('cors')
const httpStatus = require('http-status')
const uprepResponse = require('./../server/middleware/response')
const helmet = require('helmet')
const routes = require('./../server/routes/index.route')
const config = require('./config')
const APIError = require('./../server/helpers/APIError')
const path = require('path')

const app = express();

if (config.env === 'development') {
    app.use(logger('dev'));
}
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(uprepResponse());
app.use(cookieParser());
app.use(compress());
app.use(methodOverride());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());
// serve static files
app.use(express.static(path.resolve('./public')));
app.use('/uploads', express.static(path.resolve('./uploads')));

// mount all routes on /api path
app.use('/api', routes);
// Setup a default catch-all route that sends back the index.html page
app.get('*', (req, res) => {
    res.sendFile('index.html', {root: './public'});
});

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
    if (!(err instanceof APIError)) {
        const apiError = new APIError(err.message, err.status, err.isPublic);
        return next(apiError);
    }
    return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new APIError('API not found', httpStatus.NOT_FOUND);
    return next(err);
});

module.exports =  app;