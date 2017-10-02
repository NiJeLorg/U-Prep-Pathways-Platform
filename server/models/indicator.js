'use strict';
module.exports = (sequelize, DataTypes) => {
  var Indicator = sequelize.define('Indicator', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Indicator.associate = (models) => {
    Indicator.hasMany(models.Level, {
      foreignKey: 'indicatorId',
      as: 'levels',
    });
    Indicator.belongsTo(models.Component, {
      foreignKey: 'componentId',
      onDelete: 'CASCADE',
    });
  };

  return Indicator;
};
