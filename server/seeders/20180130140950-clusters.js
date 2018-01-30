'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('clusters', [
            {name: "Learning Targets", created_at: new Date(), updated_at: new Date()},
            {name: "Standards", created_at: new Date(), updated_at: new Date()},
            {name: "Planning", created_at: new Date(), updated_at: new Date()},
            {name: "Instruction", created_at: new Date(), updated_at: new Date()},
            {name: "Tasks", created_at: new Date(), updated_at: new Date()},
            {name: "Interaction & Behaviors", created_at: new Date(), updated_at: new Date()},
            {name: "Crew", created_at: new Date(), updated_at: new Date()},
            {name: "Reflective Practices", created_at: new Date(), updated_at: new Date()},
            {name: "Professional Collaboration", created_at: new Date(), updated_at: new Date()},
            {name: "Use of Data", created_at: new Date(), updated_at: new Date()},
            {name: "Policies & Procedures", created_at: new Date(), updated_at: new Date()},
            {name: "Trust", created_at: new Date(), updated_at: new Date()},
            {name: "Growth Plans", created_at: new Date(), updated_at: new Date()}
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('clusters', null, {});
    }
};
