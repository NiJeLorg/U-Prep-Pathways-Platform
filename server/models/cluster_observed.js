'use strict';
module.exports = (sequelize, DataTypes) => {
    let ClusterObserved = sequelize.define('cluster_observed', {
        observation_id: DataTypes.INTEGER,
        // clusters: DataTypes.ARRAY(sequelize.TEXT)
    }, {
      underscored: true
    });
    return ClusterObserved;
};