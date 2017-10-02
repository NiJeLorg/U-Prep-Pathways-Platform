'use strict';
module.exports = (sequelize, DataTypes) => {
  var District = sequelize.define('District', {
    name: DataTypes.STRING
  });
  District.associate = (models) => {
    District.hasMany(models.School, {
      foreignKey: 'districtId',
      as: 'schools',
    });
  };
  return District;
};
