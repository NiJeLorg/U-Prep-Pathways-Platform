'use strict';
module.exports = (sequelize, DataTypes) => {
  var School = sequelize.define('School', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  });
  School.associate = (models) => {
    School.hasMany(models.Teacher, {
      foreignKey: 'schoolId',
      as: 'teachers',
    });
    School.belongsTo(models.District, {
      foreignKey: 'districtId',
      onDelete: 'CASCADE',
    });
  };
  return School;
};
