'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationTypePropertyData = sequelize.define('observation_type_property_data', {
        value: DataTypes.STRING
    }, {underscored: true});
    ObservationTypePropertyData.associate = (models) => {
        ObservationTypePropertyData.belongsTo(models.observation_type_property, {
            foreignKey: 'observation_type_property_id',
            as: 'observation_type_property'
        });
    };
    return ObservationTypePropertyData;
};
