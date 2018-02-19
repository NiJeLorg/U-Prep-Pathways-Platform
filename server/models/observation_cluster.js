'use strict';
module.exports = (sequelize, DataTypes) => {
  let ObservationCluster = sequelize.define('observation_cluster', {
    observation_id: DataTypes.INTEGER,
    cluster_id: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });
  return ObservationCluster;
};