'use strict';
module.exports = (sequelize, DataTypes) => {
  let ObservationCluster = sequelize.define('observation_cluster', {
    name: DataTypes.STRING
  }, {
    underscored: true
  });
  return ObservationCluster;
};