'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      username: 'Tedotieno',
      first_name: 'Teddy',
      last_name: 'Otieno',
      password: 'password',
      bio: 'This is my bio',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null, {});
  }
};
