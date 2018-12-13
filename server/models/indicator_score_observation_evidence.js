"use strict";

module.exports = (sequelize, DataTypes) => {
    let IndicatorScoreObservationEvidence = sequelize.define(
        "indicator_score_observation_evidence",
        {},
        { underscored: true }
    );
    return IndicatorScoreObservationEvidence;
};
