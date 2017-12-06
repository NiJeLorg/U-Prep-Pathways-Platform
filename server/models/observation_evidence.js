'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationEvidence = sequelize.define('ObservationEvidence', {
        name: DataTypes.STRING,
        link: DataTypes.STRING,
        media_type_id: DataTypes.INTEGER,
        observation_id: DataTypes.INTEGER
    }, {
        classMethods: {}
    });
    return ObservationEvidence;
};