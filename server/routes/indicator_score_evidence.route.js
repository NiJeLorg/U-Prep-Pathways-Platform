const express = require("express");
const indicatorScoreEvidenceCtrl = require("./../controllers/indicator_score_evidence.controller");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router
    .route("/")
    .get(asyncHandler(indicatorScoreEvidenceCtrl.list))
    .post(asyncHandler(indicatorScoreEvidenceCtrl.create))
    .delete(asyncHandler(indicatorScoreEvidenceCtrl.destroy));

module.exports = router;
