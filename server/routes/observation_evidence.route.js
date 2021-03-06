const express = require('express');
const observationEvidenceCtrl = require('./../controllers/observation_evidence.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.route('/:observationEvidenceId')
/** DELETE /api/observation_evidences/:observationEvidenceId - Delete observationEvidence */
    .delete(asyncHandler(observationEvidenceCtrl.remove));
/** Load observationEvidence when API with observationEvidenceId route parameter is hit */
router.param('observationEvidenceId', asyncHandler(observationEvidenceCtrl.load));

module.exports = router;