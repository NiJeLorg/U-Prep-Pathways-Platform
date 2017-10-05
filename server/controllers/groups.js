'use strict';
const Group = require('../models').Group,
User = require('../models').User;

module.exports = {
  create(req, res) {
    return Group
      .create({
        name: req.body.name,
      })
      .then(group => res.status(201).send(group))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Group
    .findAll({
        include: [{
          model: User,
          as: 'users',
        }],
    })
    .then(groups => res.status(200).send(groups))
    .catch(error => res.status(400).send(error));
  },
};