import express from 'express';
import observationTypeCtrl from './../controllers/observation_type.controller';

const router = express.Router();

router.route('/')
/** Get /api/observation_types - Get list of observation types*/
    .get(observationTypeCtrl.get);

router.route('/:observationTypeId')
/** GET /api/observation_types/:observationTypeId - Get observation type */
    .get(observationTypeCtrl.load);
/** Load observation type when API with observationTypeId route parameter is hit */
router.param('observationTypeId', observationTypeCtrl.load);
export default router;