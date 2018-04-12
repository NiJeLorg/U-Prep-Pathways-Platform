'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('school_subjects', {
          school_id: {
          allowNull: false,
          type: Sequelize.INTEGER
      },
          subject_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
          },
          created_at: {
              allowNull: false,
              type: Sequelize.DATE
          },
          updated_at: {
              allowNull: false,
              type: Sequelize.DATE
          } });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('school_subjects');
  }
};
