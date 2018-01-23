'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('observation_types', [
            {name: "Crew", created_at: new Date(), updated_at: new Date()},
            {name: "Lesson", created_at: new Date(), updated_at: new Date()},
            {name: "School Wide", created_at: new Date(), updated_at: new Date()},
            {name: "Adult", created_at: new Date(), updated_at: new Date()}
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('observation_types', null, {});
    }
};
