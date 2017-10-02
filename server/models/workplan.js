'use strict';
module.exports = (sequelize, DataTypes) => {
  var Workplan = sequelize.define('Workplan', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Workplan;
};