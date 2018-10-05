'use strict';

const score = require('./../models');

const get = async(req, res) => {
    res.sendData(req.score);
}

const list = async(req, res) => {
    const scores = await score.all({
        include: ['teacher', 'subject', 'grade', 'school']
    });
    res.sendData(scores)
};

const create = async(req, res) => {
    const scoreObj = await score.create({
        teacher_id: req.body.teacher_id,
        subject_id: req.body.subject_id,
        grade_id: req.body.grade_id,
        school_id: req.body.school_id,
        user_id: req.body.user_id || 1
    })
    res.sendData(scoreObj);
};

const load = async(req, res, next) => {
    const scoreObj = await score.findById(req.params.scoreId, {
        include: ['subject', 'school', 'teacher', 'grade', 'indicator_scores']
    });
    if (!scoreObj) {
        return res.sendNotFound();
    }
    req.score = scoreObj;
    return next();
};

const remove = async(req, res) => {
    const score = req.score;
    let deletedScore = await score.destroy();
    res.sendData(deletedScore)
};

module.exports = {
    get,
    list,
    load,
    create,
    remove
};