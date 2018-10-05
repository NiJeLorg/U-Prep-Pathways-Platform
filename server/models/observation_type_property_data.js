'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationTypePropertyData = sequelize.define('observation_type_property_data', {
        value: DataTypes.STRING
    }, {underscored: true});

    return ObservationTypePropertyData;
};
