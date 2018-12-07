const indicator_score = require("../models/index").indicator_score;

const get = async (req, res) => {
    res.sendData(req.indicatorScore);
};

const load = async (req, res, next, id) => {
    const indicatorScoreObj = await indicator_score.findById(id, {
        include: [{ all: true }]
    });
    if (!indicatorScoreObj) {
        return res.sendNotFound();
    }
    req.indicatorScore = indicatorScoreObj;
    return next();
};

const list = async (req, res) => {
    const indicatorScores = await indicator_score.findAll({
        include: [{ all: true }]
    });
    res.sendData(indicatorScores);
};

const create = async (req, res) => {
    let indicatorScoreObject = await indicator_score.findOne({
        where: {
            score_id: req.body.score_id,
            indicator_id: req.body.indicator_id
        }
    });
    if (indicatorScoreObject !== null) {
        await indicatorScoreObject.update({
            value: req.body.value,
            note: req.body.note
        });
    } else {
        indicatorScoreObject = await indicator_score.create({
            value: req.body.value,
            score_id: req.body.score_id,
            indicator_id: req.body.indicator_id
        });
    }

    res.sendData(indicatorScoreObject);
};

module.exports = {
    load,
    get,
    list,
    create
};
