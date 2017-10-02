'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING
  });
  Teacher.associate = (models) => {
    Teacher.belongsTo(models.School, {
      foreignKey: 'schoolId',
      onDelete: 'CASCADE',
    });
  };
  return Teacher;
};