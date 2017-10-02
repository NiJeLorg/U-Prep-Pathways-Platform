'use strict';
const User = require('../models').User;
module.exports = {
    create(req, res) {
        return User
            .create({
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                bio: req.body.bio,
                groupId: req.params.groupId
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return User
            .all()
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },
};