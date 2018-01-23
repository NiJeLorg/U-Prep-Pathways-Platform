import express from 'express';
import observationCtrl from './../controllers/observation.controller';

const router = express.Router();

router.route('/')
/** Get /api/observations - Get list of observations*/
    .get(observationCtrl.get);

router.route('/:observationId')
/** GET /api/observations/:observationId - Get observation */
    .get(observationCtrl.get);
/** Load observation when API with observationId route parameter is hit */
router.param('observationId', observationCtrl.load);
export default router;