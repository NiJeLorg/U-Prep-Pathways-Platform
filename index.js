'use strict';
// config should be imported before importing any other file
const config = require('dotenv').config();
const app = require('./config/express');


// Start the server
if (!module.parent) {
    // listen on port config.port
    app.listen(config.port, () => {
        console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
    });
}

export default app;
