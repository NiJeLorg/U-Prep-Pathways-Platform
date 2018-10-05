'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('scores', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            teacher_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            grade_id:{
                allowNull: false,
                type: Sequelize.INTEGER
            },
            subject_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            school_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            label: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('scores');
    }
};