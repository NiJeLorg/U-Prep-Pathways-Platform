'use strict';
module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Group.associate = (models) => {
    Group.hasMany(models.User, {
      foreignKey: 'groupId',
      as: 'users',
    });
  };
  return Group;
};