'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('observation_type_properties', [
            {label: "Teacher", label_meta: "Knowledge and Skill", help_text:"What is the teacher doing? What is the teacher saying?", observation_type_id: 2, created_at: new Date(), updated_at: new Date()},
            {label: "Students", label_meta: "Behavior", help_text:"What are the students doing? What are the students saying?", observation_type_id: 2, created_at: new Date(), updated_at: new Date()},
            {label: "Conclusions", label_meta: "", help_text:"Best when... Better if...", observation_type_id: 2, created_at: new Date(), updated_at: new Date()},
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('observation_type_properties', null, {});
    }
};
