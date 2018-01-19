import express from 'express';
import observationCtrl from './../controllers/observation.controller';

const router = express.Router();

router.route('/')
/** Get /api/grades - Get list of grades*/
    .get(observationCtrl.get);

router.route('/:observationId')
/** GET /api/grades/:gradeId - Get grade */
    .get(observationCtrl.load);

export default router;