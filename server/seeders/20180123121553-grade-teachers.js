'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('grade_teachers', [
            {teacher_id: 1, grade_id: 1, created_at: new Date(), updated_at: new Date()},
            {teacher_id: 1, grade_id: 2, created_at: new Date(), updated_at: new Date()},
            {teacher_id: 2, grade_id: 1, created_at: new Date(), updated_at: new Date()},
            {teacher_id: 2, grade_id: 2, created_at: new Date(), updated_at: new Date()},
            {teacher_id: 3, grade_id: 1, created_at: new Date(), updated_at: new Date()},
            {teacher_id: 3, grade_id: 2, created_at: new Date(), updated_at: new Date()},
            {teacher_id: 4, grade_id: 2, created_at: new Date(), updated_at: new Date()},
            {teacher_id: 4, grade_id: 3, created_at: new Date(), updated_at: new Date()},
            {teacher_id: 5, grade_id: 4, created_at: new Date(), updated_at: new Date()},
            {teacher_id: 5, grade_id: 5, created_at: new Date(), updated_at: new Date()},
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('grade_teachers', null, {});
    }
};
