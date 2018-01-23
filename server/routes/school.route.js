import express from 'express';
import schoolCtrl from './../controllers/school.controller';

const router = express.Router();

router.route('/')
/** Get /api/schools - Get list of schools*/
    .get(schoolCtrl.get);

router.route('/:schoolId')
/** GET /api/schools/:schoolId - Get school */
    .get(schoolCtrl.load);
/** Load school when API with schoolId route parameter is hit */
router.param('schoolId', schoolCtrl.load);
export default router;