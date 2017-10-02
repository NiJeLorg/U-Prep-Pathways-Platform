'use strict';
module.exports = (sequelize, DataTypes) => {
  var Level = sequelize.define('Level', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });
  Level.associate = (models) => {
    Level.belongsTo(models.Indicator, {
      foreignKey: 'indicatorId',
      onDelete: 'CASCADE',
    });
  };
  return Level;
};
