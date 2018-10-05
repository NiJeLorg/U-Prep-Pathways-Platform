'use strict';
module.exports = (sequelize, DataTypes) => {
    let Cluster = sequelize.define('cluster', {
        name: DataTypes.STRING
    }, {
        underscored: true
    });
    Cluster.associate = (models) => {
        Cluster.belongsToMany(models.observation, {
            foreignKey: 'cluster_id',
            through: models.observation_cluster
    });
    };
    return Cluster;
};