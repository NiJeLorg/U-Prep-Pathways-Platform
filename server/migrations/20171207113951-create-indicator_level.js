'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('indicator_levels', {
            level_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            indicator_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            description: {
              type: Sequelize.TEXT
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