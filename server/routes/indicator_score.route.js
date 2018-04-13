import express from 'express';
import indicatorScoreCtrl from './../controllers/indicator_score.controller';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.route('/')
    .get(asyncHandler(indicatorScoreCtrl.list))
    .post(asyncHandler(indicatorScoreCtrl.create));

export default router;