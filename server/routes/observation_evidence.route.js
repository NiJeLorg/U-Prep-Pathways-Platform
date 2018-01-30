import express from 'express';
import observationEvidenceCtrl from './../controllers/observation_evidence.controller';
const router = express.Router();

router.route('/:observationEvidenceId')
/** DELETE /api/observation_evidences/:observationEvidenceId - Delete observationEvidence */
    .delete(observationEvidenceCtrl.remove);
/** Load observationEvidence when API with observationEvidenceId route parameter is hit */
router.param('observationId', observationEvidenceCtrl.load);
export default router;