'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('grade_subject_teachers', {
            subject_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            grade_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            teacher_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('grade_subject_teachers');
    }
};
