'use strict';
module.exports = (sequelize, DataTypes) => {
  var Workplan = sequelize.define('Workplan', {
    name: DataTypes.STRING
  }, {
    underscored: true
  });
  return Workplan;
};