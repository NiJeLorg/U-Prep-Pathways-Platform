const express = require('express'),
    apiRouter = express.Router(),
    usersController = require('../controllers').users,
    groupsController = require('../controllers').groups;

module.exports = (app) => {

    apiRouter.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to U-Prep-Pathways-Platform API!'
    }));

    app.use('/api', apiRouter);

    apiRouter.route('/groups')
        .get(groupsController.list)
        .post(groupsController.create);

    apiRouter.route('/groups/:groupId/users')
        .get(usersController.list)
        .post(usersController.create);

};
