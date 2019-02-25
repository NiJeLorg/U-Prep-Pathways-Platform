const indicator_score_observation_evidence = require("../models/index")
    .indicator_score_observation_evidence;

const get = async (req, res) => {
    return res.sendData({});
};
const list = async (req, res) => {
    const indicatorScoreObservationEvidences = await indicator_score_observation_evidence.all();
    res.sendData(indicatorScoreObservationEvidences);
};
const create = async (req, res) => {
    const indicatorScoreObservationEvidence = await indicator_score_observation_evidence.create(
        {
            indicator_score_id: req.body.indicator_score_id,
            property_data_id: req.body.property_data_id
        }
    );
    res.sendData(indicatorScoreObservationEvidence);
};

const destroy = async (req, res) => {
    const indicatorScoreEvidence = await indicator_score_observation_evidence.destroy(
        {
            where: {
                indicator_score_id: req.query.indicator_score_id,
                property_data_id: req.query.property_data_id
            }
        }
    );
    if (indicatorScoreEvidence === 1) {
        res.sendData({
            data: {
                message: "Deletion successful"
            }
        });
    }
};

module.exports = {
    get,
    list,
    create,
    destroy
};
