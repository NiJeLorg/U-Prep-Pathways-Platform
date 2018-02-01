import express from 'express';
import subjectCtrl from './../controllers/subject.controller';
import asyncHandler from 'express-async-handler';
const router = express.Router();

router.route('/')
/** Get /api/observations - Get list of observations*/
    .get(asyncHandler(subjectCtrl.list));

router.route('/:subjectId')
/** GET /api/observations/:observationId - Get observation */
    .get(asyncHandler(subjectCtrl.get));
/** Load observation when API with observationId route parameter is hit */
router.param('subjectId', asyncHandler(subjectCtrl.load));
export default router;