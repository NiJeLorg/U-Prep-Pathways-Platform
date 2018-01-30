'use strict';
module.exports = (sequelize, DataTypes) => {
    let Cluster = sequelize.define('cluster', {
        name: DataTypes.STRING
    }, {
        underscored: true
    });
    return Cluster;
};