'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('observation_evidence', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            link: {
                type: Sequelize.STRING
            },
            media_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'media_types',
                    key: 'id'
                }
            },
            observation_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'observations',
                    key: 'id'
                }
            }
        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('observation_evidence');
    }
};
