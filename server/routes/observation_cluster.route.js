import express from 'express';
import observationClusterCtrl from './../controllers/observation_cluster.controller';
const router = express.Router();
router.route('/')
/** Get /api/observations - Get list of observation clusters*/
    .get(observationClusterCtrl.list);

router.route('/:observationClusterId')
/** GET /api/observations/:observationClusterId - Get observation cluster */
    .get(observationClusterCtrl.get);

router.param('observationClusterId', observationClusterCtrl.load);
export default router;