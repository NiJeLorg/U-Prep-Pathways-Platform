'use strict';
module.exports = (sequelize, DataTypes) => {
  var Component = sequelize.define('Component', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });
  Component.associate = (models) => {
    Component.hasMany(models.Indicator, {
      foreignKey: 'componentId',
      as: 'indicators',
    });
    Component.belongsTo(models.Element, {
      foreignKey: 'elementId',
      onDelete: 'CASCADE',
    });
  };
  return Component;
};
