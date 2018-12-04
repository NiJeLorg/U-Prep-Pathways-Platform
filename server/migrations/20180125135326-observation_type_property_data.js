'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('observation_type_property_data', {
            observation_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            observation_type_property_id: {
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
        return queryInterface.dropTable('observation_type_property_data');
    }
};