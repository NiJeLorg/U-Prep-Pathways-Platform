'use strict';
module.exports = (sequelize, DataTypes) => {
  var Observation = sequelize.define('Observation', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Observation;
};