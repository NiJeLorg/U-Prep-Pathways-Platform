'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('indicator_levels', {
            observation_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            observation_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            value: {
                type: Sequelize.STRING,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('indicator_levels');
    }
};