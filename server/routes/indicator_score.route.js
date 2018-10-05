const express = require('express');
const indicatorScoreCtrl = require('./../controllers/indicator_score.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.route('/')
    .get(asyncHandler(indicatorScoreCtrl.list))
    .post(asyncHandler(indicatorScoreCtrl.create));

module.exports = router;