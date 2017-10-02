'use strict';
module.exports = (sequelize, DataTypes) => {
  var Evidence_Type = sequelize.define('Evidence_Type', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Evidence_Type;
};