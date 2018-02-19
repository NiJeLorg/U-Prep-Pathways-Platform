'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('grades', [
          {name: 'Grade 1', created_at: new Date(), updated_at: new Date()},
          {name: 'Grade 2', created_at: new Date(), updated_at: new Date()},
          {name: 'Grade 3', created_at: new Date(), updated_at: new Date()},
          {name: 'Grade 4', created_at: new Date(), updated_at: new Date()},
          {name: 'Grade 5', created_at: new Date(), updated_at: new Date()},
          {name: 'Grade 6', created_at: new Date(), updated_at: new Date()},
          {name: 'Grade 7', created_at: new Date(), updated_at: new Date()}
          ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('grades', null, {});
  }
};
