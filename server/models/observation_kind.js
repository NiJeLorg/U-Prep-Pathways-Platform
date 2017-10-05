'use strict';
module.exports = (sequelize, DataTypes) => {
  var Observation_Kind = sequelize.define('Observation_Kind', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Observation_Kind;
};