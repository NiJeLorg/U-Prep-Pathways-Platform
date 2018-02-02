import express from 'express';
import observationTypeCtrl from './../controllers/observation_type.controller';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.route('/')
/** Get /api/observation_types - Get list of observation types*/
    .get(asyncHandler(observationTypeCtrl.list));

router.route('/:observationTypeId')
/** GET /api/observation_types/:observationTypeId - Get observation type */
    .get(asyncHandler(observationTypeCtrl.get));
/** Load observation type when API with observationTypeId route parameter is hit */
router.param('observationTypeId', asyncHandler(observationTypeCtrl.load));
export default router;