'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('schools', [
          {name: 'UPSM Elementary', created_at: new Date(), updated_at: new Date()},
          {name: 'UPA Elementary', created_at: new Date(), updated_at: new Date()},
          {name: 'UPA HS', created_at: new Date(), updated_at: new Date()},
          {name: 'UPSM High School', created_at: new Date(), updated_at: new Date()},
          {name: 'UPA MS', created_at: new Date(), updated_at: new Date()},
          {name: 'UPA MM', created_at: new Date(), updated_at: new Date()},

      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('schools', null, {});
  }
};
