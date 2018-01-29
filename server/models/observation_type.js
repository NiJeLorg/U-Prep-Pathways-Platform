'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationType = sequelize.define('observation_type', {
        name: DataTypes.STRING
    }, {
        underscored: true
    });

    ObservationType.associate = (models) => {
        ObservationType.hasMany(models.observation, {
            foreignKey: 'observation_type_id',
            as: 'observations'
        });
        ObservationType.hasMany(models.observation_type_property, {
            foreignKey: 'observation_type_id',
            as: 'observation_type_properties'
        });
    };
    return ObservationType;
};