 'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('observations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER //TODO Consider changing to using UUID
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.INTEGER
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            observation_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'observation_types',
                    key: 'id'
                }
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            teacher_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            grade_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            subject_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            school_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('observations');
    }
};