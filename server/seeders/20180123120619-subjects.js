'use strict';
const subjects = ['ela',
    'self-contained',
    'music',
    'gym',
    'pltw',
    'art',
    'science',
    'math',
    'reading'
    ];

const subjectEntries = subjects.map(subject =>  {
    return {name: subject, created_at: new Date(), updated_at: new Date()}
});
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('subjects', subjectEntries, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('subjects', null, {});
    }
};
