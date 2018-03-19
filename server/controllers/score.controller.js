'use strict';

import {
    score
} from './../models';
import Sequelize from 'sequelize';

// const get = async(req, res)=> {
//     res.sendData(req.score);
// }

const list = async (req, res) => {
    const scores = await score.all({
        include: ['teacher', 'subject', 'grade', 'school']
    });
    res.sendData(scores)
};

const create = async (req, res) => {
    const scoreObj = await score.create({
        teacher_id: req.body.teacher_id,
        subject_id: req.body.subject_id,
        grade_id: req.body.grade_id,
        school_id: req.body.school_id,
        user_id: req.body.user_id || 1,
    })
    res.sendData(scoreObj);
};

export default {
    list,
    create
};