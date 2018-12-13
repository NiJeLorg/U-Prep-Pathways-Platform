const indicator_score_evidence = require("../models/index")
    .indicator_score_evidence;

const get = async (req, res) => {
    return res.sendData({});
};
const list = async (req, res) => {
    const indicatorScoreEvidences = await indicator_score_evidence.all();
    res.sendData(indicatorScoreEvidences);
};
const create = async (req, res) => {
    const indicatorScoreEvidence = await indicator_score_evidence.create({
        indicator_score_id: req.body.indicator_score_id,
        observation_evidence_id: req.body.observation_evidence_id
    });
    res.sendData(indicatorScoreEvidence);
};

const destroy = async (req, res) => {
    const indicatorScoreEvidence = await indicator_score_evidence.destroy({
        where: {
            indicator_score_id: req.query.indicator_score_id,
            observation_evidence_id: req.query.observation_evidence_id
        }
    });
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
