const usersController = require('../controllers').users,
    groupsController = require('../controllers').groups;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to U-Prep-Pathways-Platform API!',
    }));

    app.post('/api/groups', groupsController.create);
    app.get('/api/groups', groupsController.list);

    app.post('/api/groups/:groupId/users', usersController.create);
    app.get('/api/groups/:groupId/users', usersController.list);


};
