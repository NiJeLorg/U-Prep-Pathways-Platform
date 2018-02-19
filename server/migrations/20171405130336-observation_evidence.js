'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('observation_evidences', {
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
                allowNull: true,
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
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('observation_evidence');
    }
};
