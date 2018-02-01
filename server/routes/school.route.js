import express from 'express';
import schoolCtrl from './../controllers/school.controller';
import asyncHandler from 'express-async-handler';
const router = express.Router();

router.route('/')
/** Get /api/schools - Get list of schools*/
    .get(asyncHandler(schoolCtrl.list));

router.route('/:schoolId')
/** GET /api/schools/:schoolId - Get school */
    .get(asyncHandler(schoolCtrl.get));
/** Load school when API with schoolId route parameter is hit */
router.param('schoolId', asyncHandler(schoolCtrl.load));
export default router;