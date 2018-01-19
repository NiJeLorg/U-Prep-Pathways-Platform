'use strict';
// config should be imported before importing any other file
import config from './config/config';
import app from './config/express';
import express from 'express';

const debug = require('debug')('uprep-api:index');

// Promise = require('bluebird');



// Start the server
if (!module.parent) {
    // listen on port config.port
    app.listen(config.port, () => {
        console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
    });
}

export default app;
