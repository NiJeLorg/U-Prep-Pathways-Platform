'use strict';
module.exports = (sequelize, DataTypes) => {
    let Observation = sequelize.define('observation', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {underscored: true});

    Observation.associate = (models) => {
        Observation.belongsTo(models.observation_type, {
            foreignKey: 'observation_type_id',
        });
    };

    return Observation;
};