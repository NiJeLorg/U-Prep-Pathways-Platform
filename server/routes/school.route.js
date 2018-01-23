import express from 'express';
import schoolCtrl from './../controllers/school.controller';

const router = express.Router();

router.route('/')
/** Get /api/grades - Get list of grades*/
    .get(schoolCtrl.get);

router.route('/:schoolId')
/** GET /api/grades/:gradeId - Get grade */
    .get(schoolCtrl.load);
/** Load user when API with userId route parameter is hit */
router.param('schoolId', schoolCtrl.load);
export default router;