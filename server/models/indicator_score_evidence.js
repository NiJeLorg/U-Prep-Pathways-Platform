"use strict";

module.exports = (sequelize, DataTypes) => {
    let IndicatorScoreEvidence = sequelize.define(
        "indicator_score_evidence",
        {},
        { underscored: true }
    );
    return IndicatorScoreEvidence;
};
