const express = require('express');
const observationClusterCtrl = require('./../controllers/observation_cluster.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();
router.route('/')
/** Get /api/observation_clusters - Get list of observation clusters*/
    .get(asyncHandler(observationClusterCtrl.list));

router.route('/:observationClusterId')
/** GET /api/observation_clusters/:observationClusterId - Get observation cluster */
    .get(asyncHandler(observationClusterCtrl.get));

router.param('observationClusterId', asyncHandler(observationClusterCtrl.load));

module.exports = router;