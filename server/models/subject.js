'use strict';
module.exports = (sequelize, DataTypes) => {
  let Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {
    underscored: true

  });
  return Subject;
};