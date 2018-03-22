import express from 'express';
import scoreCtrl from './../controllers/score.controller';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.route('/')
    .get(asyncHandler(scoreCtrl.list))
    .post(asyncHandler(scoreCtrl.create));

router.route('/:scoreId')
    .get(asyncHandler(scoreCtrl.get))
    .delete(asyncHandler(scoreCtrl.remove));


router.param('scoreId', asyncHandler(scoreCtrl.load));
export default router;