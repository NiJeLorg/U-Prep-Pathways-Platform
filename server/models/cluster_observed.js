'use strict';
module.exports = (sequelize, DataTypes) => {
    let ClusterObserved = sequelize.define('ClusterObserved', {
        observation_id: DataTypes.INTEGER,
        // clusters: DataTypes.ARRAY(sequelize.TEXT)
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return ClusterObserved;
};