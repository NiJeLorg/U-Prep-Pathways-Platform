import express from 'express';
import gradeCtrl from './../controllers/grade.controller';
import asyncHandler from 'express-async-handler';

const router = express.Router({mergeParams: true});

router.route('/')
    /** Get /api/grades - Get list of grades*/
    .get(asyncHandler(gradeCtrl.list));

router.route('/:gradeId')
/** GET /api/grades/:gradeId - Get grade */
    .get(asyncHandler(gradeCtrl.get));
/** Load grade when API with gradeId route parameter is hit */
router.param('gradeId', asyncHandler(gradeCtrl.load));
export default router;