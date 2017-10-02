'use strict';
module.exports = (sequelize, DataTypes) => {
  var Observation_Type = sequelize.define('Observation_Type', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Observation_Type;
};