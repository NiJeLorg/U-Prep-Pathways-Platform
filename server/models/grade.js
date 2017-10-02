'use strict';
module.exports = (sequelize, DataTypes) => {
  var Grade = sequelize.define('Grade', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Grade;
};