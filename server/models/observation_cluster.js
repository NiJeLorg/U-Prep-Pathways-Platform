'use strict';
module.exports = (sequelize, DataTypes) => {
  var Observation_cluster = sequelize.define('Observation_cluster', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Observation_cluster;
};