import express from 'express';
import seederCtrl from './../controllers/seeder.controller';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.route('/teachers')
/** Get /api/schools - Get list of schools*/
    .post( asyncHandler(seederCtrl.seedTeacher));

router.route('/grades')
/** Get /api/schools - Get list of schools*/
    .post( asyncHandler(seederCtrl.seedGrades));

router.route('/subjects')
/** Get /api/schools - Get list of schools*/
    .post( asyncHandler(seederCtrl.seedSubjects));

export default router;