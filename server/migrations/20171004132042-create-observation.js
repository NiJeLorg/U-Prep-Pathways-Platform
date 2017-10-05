'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Observations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      crew_name: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      teacher: {
        type: Sequelize.STRING
      },
      student: {
        type: Sequelize.STRING
      },
      conclusions: {
        type: Sequelize.STRING
      },
      context: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Observations');
  }
};