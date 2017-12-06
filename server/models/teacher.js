'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING
  });
  // Teacher.associate = (models) => {
  //   Teacher.belongsTo(models.school, {
  //     foreignKey: 'schoolId',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return Teacher;
};