'use strict';
const faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('teachers', [
            {name: faker.name.findName(), school_id: 2, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 2, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 3, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 3, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 4, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 4, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 4, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 5, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 5, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 1, created_at: new Date(), updated_at: new Date()},
            {name: faker.name.findName(), school_id: 5, created_at: new Date(), updated_at: new Date()},

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('teachers', null, {});
    }
};
