import {observation_evidence} from './../models';


function load(req, res, next, id) {
    return observation_evidence
        .findById(req.params.observationEvidenceId)
        .then((observationEvidence) => {
            if (!observationEvidence) {
                return res.sendNotFound();
            }
            req.observationEvidence = observationEvidence;
            return next();
        })
        .catch((error) => res.sendBadRequest());

}


/**
 * Delete observationEvidence.
 * @returns {observationEvidence}
 */
function remove(req, res, next) {
    const observationEvidence = req.observationEvidence;
    observationEvidence.destroy()
        .then(deletedObservationEvidence => res.sendData(deletedObservationEvidence))
        .catch(e => next(e));
}


export default {load,remove};