const evidence = require("../models/index").Evidence;

const get = async (req, res) => {
    res.sendData(req.evidence);
};

const list = async (req, res) => {
    const evidences = await evidence.findAll();
    res.sendData(evidences);
};

const create = async (req, res) => {
    const evidenceObj = await evidence.create({
        note: req.body.note,
        indicator_score_id: req.body.indicator_score_id
    });
    res.sendData(evidenceObj);
};

module.exports = { get, list, create };
