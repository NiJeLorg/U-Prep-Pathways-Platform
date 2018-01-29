'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('clusters_observed', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            observation_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'observations',
                    key: 'id'
                }
            },
            clusters: {
                type: Sequelize.ARRAY(Sequelize.INTEGER)
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
        return queryInterface.dropTable('clusters_observed');
    }
};