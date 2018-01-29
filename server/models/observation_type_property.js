'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationTypeProperty = sequelize.define('observation_type_property', {
        label: DataTypes.STRING,
        label_meta: DataTypes.STRING,
        help_text: DataTypes.TEXT
    }, {
        underscored: true
    });

    ObservationTypeProperty.associate = (models) => {
        ObservationTypeProperty.belongsTo(models.observation_type, {
            foreignKey: 'observation_type_id',
            as: 'observation_type'
        });
    };
    return ObservationTypeProperty;
};