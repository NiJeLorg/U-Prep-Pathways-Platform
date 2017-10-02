'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [{
      name: 'School Principals',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Central Management',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Assistant Deans of Culture Instructional Coaches',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Teacher Leaders',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'College Counselors',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Groups', null, {});
  }
};
