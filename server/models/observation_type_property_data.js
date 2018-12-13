"use strict";
module.exports = (sequelize, DataTypes) => {
    let ObservationTypePropertyData = sequelize.define(
        "property_data",
        {
            value: DataTypes.TEXT
        },
        { underscored: true }
    );

    ObservationTypePropertyData.associate = models => {
        ObservationTypePropertyData.belongsTo(models.observation, {
            foreignKey: "observation_id"
        });
        ObservationTypePropertyData.belongsTo(models.observation_type, {
            foreignKey: "observation_type_property_id"
        });
        ObservationTypePropertyData.belongsToMany(models.indicator_score, {
            foreignKey: "property_data_id",
            through: models.indicator_score_observation_evidence,
            as: "observationIndicatorScores"
        });
    };

    return ObservationTypePropertyData;
};
