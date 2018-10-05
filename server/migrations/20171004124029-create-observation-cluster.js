'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('observation_clusters', {
      observation_id: {
        type: Sequelize.INTEGER
      },
      cluster_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('observation_clusters');
  }
};