import express from 'express';
import teacherCtrl from './../controllers/teacher.controller';

const router = express.Router();

router.route('/')
/** Get /api/grades - Get list of grades*/
    .get(teacherCtrl.get);

router.route('/:teacherId')
/** GET /api/grades/:gradeId - Get grade */
    .get(teacherCtrl.load);

export default router;