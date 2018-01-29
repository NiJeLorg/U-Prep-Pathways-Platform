'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationProperty = sequelize.define('observation_property', {
        label: DataTypes.STRING,
        label_meta: DataTypes.STRING,
        help_text: DataTypes.TEXT
    }, {
        underscored: true
    });

    ObservationProperty.associate = (models) => {
        ObservationProperty.belongsTo(models.observation_type, {
            foreignKey: 'observation_type_id',
            as: 'observation_type'
        });
    };
    return ObservationType;
};