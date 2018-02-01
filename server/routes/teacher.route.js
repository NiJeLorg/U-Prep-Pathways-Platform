import express from 'express';
import teacherCtrl from './../controllers/teacher.controller';
import asyncHandler from 'express-async-handler';
const router = express.Router({mergeParams: true});

router.route('/')
/** Get /api/teachers - Get list of teachers*/
    .get(asyncHandler(teacherCtrl.list));

router.route('/:teacherId')
/** GET /api/teachers/:teacherId - Get teacher */
    .get(asyncHandler(teacherCtrl.get));
/** Load teacher when API with teacherId route parameter is hit */
router.param('teacherId', asyncHandler(teacherCtrl.load));
export default router;