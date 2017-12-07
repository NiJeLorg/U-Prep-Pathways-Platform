'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('observation_targets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            school_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'schools',
                    key: 'id'
                }
            },
            grade_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'grades',
                    key: 'id'
                }
            },
            subject_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'subjects',
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
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('observation_targets');
    }
};