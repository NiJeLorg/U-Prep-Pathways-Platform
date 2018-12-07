"use strict";
module.exports = (sequelize, DataTypes) => {
    let IndicatorScore = sequelize.define(
        "indicator_score",
        {
            value: DataTypes.INTEGER,
            note: DataTypes.STRING
        },
        {
            underscored: true
        }
    );
    IndicatorScore.associate = function(models) {
        // associations can be defined here
        IndicatorScore.belongsTo(models.score, {
            foreignKey: "score_id"
        });
        IndicatorScore.belongsTo(models.indicator, {
            foreignKey: "indicator_id"
        });
        IndicatorScore.belongsToMany(models.observation_evidence, {
            foreignKey: "indicator_score_id",
            through: models.indicator_score_evidence,
            as: "evidences"
        });
    };
    return IndicatorScore;
};
