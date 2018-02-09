const express = require('express'),
    apiRouter = express.Router(),
    swaggerUi = require('swagger-ui-express'),
    YAML = require('yamljs'),
    swaggerDocument = YAML.load('./server/swagger/swagger.yaml');

module.exports = (app) => {

    apiRouter.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to U-Prep-Pathways-Platform API!'
    }));
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/api', apiRouter);


};
