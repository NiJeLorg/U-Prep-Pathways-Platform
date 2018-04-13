'use strict';

import {
    indicator_score
} from './../models';
import Sequelize from 'sequelize';

const get = async (req, res) => {
    res.sendData(req.indicator_score);
}

const list = async (req, res) => {
    const indicatorScores = await indicator_score.all({
        include: ['score', 'indicator',]
    });
    res.sendData(indicatorScores)
};

const create = async (req, res) => {
    let indicatorScoreObject = await indicator_score.findOne({
        where: {
            score_id: req.body.score_id,
            indicator_id: req.body.indicator_id 
        }
    });
    console.log(indicatorScoreObject);
    if(indicatorScoreObject !== null){
        await indicatorScoreObject.update({
            value: req.body.value
        });
    }else{
        indicatorScoreObject = await indicator_score.create({
            value: req.body.value,
            score_id: req.body.score_id,
            indicator_id: req.body.indicator_id,
        });
    }
   
    res.sendData(indicatorScoreObject);
};

export default {
    get,
    list,
    create,
};