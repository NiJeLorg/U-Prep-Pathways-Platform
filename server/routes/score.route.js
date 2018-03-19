import express from 'express';
import scoreCtrl from './../controllers/score.controller';
import path from 'path';
import crypto from 'crypto';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.route('/')
    .get(asyncHandler(scoreCtrl.list))
    .post();

export default router;