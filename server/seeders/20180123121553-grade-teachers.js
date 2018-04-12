'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert();
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('grade_teachers', null, {});
    }
};
