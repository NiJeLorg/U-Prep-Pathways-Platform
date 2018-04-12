'use strict';
const faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert();
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('teachers', null, {});
    }
};
