import {school, grade} from './../models';

const get = async (req, res) => {
    res.sendData(req.school);
};
const list = async (req, res) => {
    const schools = await school.findAll();
    res.sendData(schools);
};
const load = async (req, res, next, id) => {
    const schoolObj = await school
        .findById(id, getIncludes(req));
    if (!schoolObj) {
        return res.sendNotFound();
    }
    req.school = schoolObj;
    return next();
};

const getIncludes = (req) => {
    return {
        include: ['grades'],
    }
};

export default {get, load, list};