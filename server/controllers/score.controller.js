'use strict';

import {score} from './../models';
import Sequelize from 'sequelize';

const get = async(req, res)=> {
    res.sendData(req.score);
}

const list = async (req, res) => {
    const scores = await score.findAll();
    res.sendData(scores)
};

export default {list};