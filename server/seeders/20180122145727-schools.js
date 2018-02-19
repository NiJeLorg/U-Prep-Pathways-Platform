'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('schools', [
          {name: 'UPSM Elementary', created_at: new Date(), updated_at: new Date()},
          {name: 'UPSM Middle', created_at: new Date(), updated_at: new Date()},
          {name: 'UPSM High', created_at: new Date(), updated_at: new Date()},
          {name: 'UPA Middle', created_at: new Date(), updated_at: new Date()},
          {name: 'UPA High', created_at: new Date(), updated_at: new Date()}

      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('schools', null, {});
  }
};
