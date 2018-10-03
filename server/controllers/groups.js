'use strict';
const group = require('../models/group');
const user = require('../models/user');

module.exports = {
  create(req, res) {
    return group
      .create({
        name: req.body.name,
      })
      .then(group => res.status(201).send(group))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return group
    .findAll({
        include: [{
          model: user,
          as: 'users',
        }],
    })
    .then(groups => res.status(200).send(groups))
    .catch(error => res.status(400).send(error));
  },
};