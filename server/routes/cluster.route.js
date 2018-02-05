import express from 'express';
import clusterCtrl from './../controllers/cluster.controller';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.route('/')
/** Get /api/schools - Get list of schools*/
    .get(asyncHandler(clusterCtrl.list));

router.route('/:schoolId')
/** GET /api/schools/:schoolId - Get school */
    .get(asyncHandler(clusterCtrl.get));
/** Load school when API with schoolId route parameter is hit */
router.param('schoolId', asyncHandler(clusterCtrl.load));
export default router;