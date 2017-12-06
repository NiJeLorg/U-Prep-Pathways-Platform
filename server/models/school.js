'use strict';
module.exports = (sequelize, DataTypes) => {
  var School = sequelize.define('School', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  });
  // School.associate = (models) => {
  //   School.hasMany(models.teacher, {
  //     foreignKey: 'schoolId',
  //     as: 'teachers',
  //   });
  //   School.belongsTo(models.district, {
  //     foreignKey: 'districtId',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return School;
};
