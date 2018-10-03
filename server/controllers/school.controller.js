const school = require('../models/school'),
    grade = require('../models/grade');

const get = async(req, res) => {
    res.sendData(req.school);
};
const list = async(req, res) => {
    const schools = await school.findAll();
    res.sendData(schools);
};
const load = async(req, res, next, id) => {
    const schoolObj = await school.findById(id, getIncludes(req));
    if (!schoolObj) {
        return res.sendNotFound();
    }
    req.school = schoolObj;
    return next();
};

const destroy = async(req, res) => {
    const schoolObj = req
        .school
        .destroy();
    res.sendData(schoolObj);
};

const update = async(req, res) => {
    console.log(req.body, 'bodyd tings');
    const schoolObj = req
        .school
        .update({name: req.body.name});
    res.sendData(schoolObj);
}

const create = async(req, res) => {
    const schoolObj = await school.create({name: req.body.school});
    res.sendData(schoolObj);
}

const getIncludes = (req) => {
    return {include: ['grades']}
};

module.exports = {
    get,
    load,
    list,
    create,
    destroy,
    update
};