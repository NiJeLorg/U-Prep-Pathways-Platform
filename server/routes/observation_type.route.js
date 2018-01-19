import express from 'express';
import observationTypeCtrl from './../controllers/observation_type.controller';

const router = express.Router();

router.route('/')
/** Get /api/grades - Get list of grades*/
    .get(observationTypeCtrl.get);

router.route('/:observationTypeId')
/** GET /api/grades/:gradeId - Get grade */
    .get(observationTypeCtrl.load);

export default router;