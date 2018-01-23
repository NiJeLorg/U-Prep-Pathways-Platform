'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('subjects', [
            {name: "Math", created_at: new Date(), updated_at: new Date()},
            {name: "English", created_at: new Date(), updated_at: new Date()},
            {name: "Geography", created_at: new Date(), updated_at: new Date()},
            {name: "Biology", created_at: new Date(), updated_at: new Date()},
            {name: "History", created_at: new Date(), updated_at: new Date()},

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('subjects', null, {});
    }
};
