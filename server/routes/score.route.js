import express from 'express';
import scoreCtrl from './../controllers/score.controller';
import path from 'path';
import crypto from 'crypto';
import asyncHandler from 'express-async-handler';
import scoreController from './../controllers/score.controller';

const router = express.Router();

router.route('/')
    .get(asyncHandler(scoreCtrl.list))
    .post(asyncHandler(scoreCtrl.create));

router.route('/:scoreId')
    .get(asyncHandler(scoreCtrl.get))
    .delete(asyncHandler(scoreCtrl.remove));


router.param('scoreId', asyncHandler(scoreCtrl.load));
export default router;