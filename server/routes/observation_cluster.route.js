import express from 'express';
import observationClusterCtrl from './../controllers/observation_cluster.controller';
import asyncHandler from 'express-async-handler';
const router = express.Router();
router.route('/')
/** Get /api/observations - Get list of observation clusters*/
    .get(asyncHandler(observationClusterCtrl.list));

router.route('/:observationClusterId')
/** GET /api/observations/:observationClusterId - Get observation cluster */
    .get(asyncHandler(observationClusterCtrl.get));

router.param('observationClusterId', asyncHandler(observationClusterCtrl.load));
export default router;