import express from 'express';
import teacherCtrl from './../controllers/teacher.controller';

const router = express.Router({mergeParams: true});

router.route('/')
/** Get /api/teachers - Get list of teachers*/
    .get(teacherCtrl.get);

router.route('/:teacherId')
/** GET /api/teachers/:teacherId - Get teacher */
    .get(teacherCtrl.load);
/** Load teacher when API with teacherId route parameter is hit */
router.param('teacherId', teacherCtrl.load);
export default router;