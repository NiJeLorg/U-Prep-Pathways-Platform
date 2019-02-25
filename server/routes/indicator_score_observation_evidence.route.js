const express = require("express");
const indicatorScoreObservationEvidenceCtrl = require("./../controllers/indicator_score_observation_evidence.controller");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router
    .route("/")
    .get(asyncHandler(indicatorScoreObservationEvidenceCtrl.list))
    .post(asyncHandler(indicatorScoreObservationEvidenceCtrl.create))
    .delete(asyncHandler(indicatorScoreObservationEvidenceCtrl.destroy));

module.exports = router;
