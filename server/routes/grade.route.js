import express from 'express';
import gradeCtrl from './../controllers/grade.controller';

const router = express.Router();

router.route('/')
    /** Get /api/grades - Get list of grades*/
    .get(gradeCtrl.get);

router.route('/:gradeId')
/** GET /api/grades/:gradeId - Get grade */
    .get(gradeCtrl.load);

export default router;