'use strict';
module.exports = (sequelize, DataTypes) => {
  let Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Subject;
};