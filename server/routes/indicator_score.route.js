const express = require("express");
const indicatorScoreCtrl = require("./../controllers/indicator_score.controller");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router
    .route("/")
    .get(asyncHandler(indicatorScoreCtrl.list))
    .post(asyncHandler(indicatorScoreCtrl.create));

router.route("/:indicatorScoreId").get(asyncHandler(indicatorScoreCtrl.get));
router.param("indicatorScoreId", asyncHandler(indicatorScoreCtrl.load));

module.exports = router;
