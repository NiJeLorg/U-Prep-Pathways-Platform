const observation_evidence = require('../models/observation_evidence');

const load = async (req, res, next, id) => {
    const observationEvidence = await observation_evidence.findById(id);
    if (!observationEvidence) {
        return res.sendNotFound();
    }
    req.observationEvidence = observationEvidence;
    return next();
};
const remove = async (req, res) => {
    const observationEvidence = req.observationEvidence;
    const deletedObservationEvidence = await observationEvidence.destroy();
    res.sendData(deletedObservationEvidence);
};


module.exports = {load, remove};