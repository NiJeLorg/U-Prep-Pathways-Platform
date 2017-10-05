'use strict';
module.exports = (sequelize, DataTypes) => {
  var Observation = sequelize.define('Observation', {
    crew_name: DataTypes.STRING,
    content: DataTypes.STRING,
    teacher: DataTypes.STRING,
    student: DataTypes.STRING,
    conclusions: DataTypes.STRING,
    context: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Observation;
};