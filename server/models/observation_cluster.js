'use strict';
module.exports = (sequelize, DataTypes) => {
  var Observation_Cluster = sequelize.define('Observation_Cluster', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Observation_Cluster;
};