'use strict';
module.exports = (sequelize, DataTypes) => {
  var Element = sequelize.define('Element', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });
  Element.associate = (models) => {
    Element.hasMany(models.Component, {
      foreignKey: 'elementId',
      as: 'components',
    });
  };
  return Element;
};
