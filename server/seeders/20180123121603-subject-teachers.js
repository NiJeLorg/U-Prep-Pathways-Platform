'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        // return queryInterface.bulkInsert();
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('subject_teachers', null, {});
    }
};
