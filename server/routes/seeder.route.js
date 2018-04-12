import express from 'express';
import seederCtrl from './../controllers/seeder.controller';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.route('/')
/** Get /api/schools - Get list of schools*/
    .post( asyncHandler(seederCtrl.seedTeacher));

export default router;