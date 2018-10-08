const subject = require('../models/subject'),
    teacher = require('../models/teacher');


const get = async(req, res) => {
    res.sendData(req.subject);
};

/**
 * Loads an existing subject based on its ID
 * @returns {subject}
 */
const load = async(req, res, next, id) => {
    const subjectObj = await subject.findById(id, getIncludes(req));
    if (!subjectObj) {
        return res.sendNotFound();
    }
    req.subject = subjectObj;
    return next();
};

/**
 * Gets List of subjects
 * @returns {subjects}
 */
const list = async(req, res) => {

    const subjects = await subject.all(getIncludes(req));
    res.sendData(subjects)
};

const create = async(req, res) => {
    const subjectObj = await subject.create({name: req.body.subject});
    res.sendData(subjectObj);
}

const destroy = async(req, res) => {
    const subjectObj = req
        .subject
        .destroy();
    res.sendData(subjectObj);
};

const update = async(req, res) => {
    const subjectObj = req
        .subject
        .update({name: req.body.name});
    res.sendData(subjectObj);
}

const getIncludes = (req) => {
    const teacherId = req.params.teacherId || req.query.teacherId;
    let includes = {};
    if (teacherId) {
        includes = {
            include: [
                {
                    attributes: [],
                    required: true,
                    model: teacher,
                    as: 'teachers',
                    where: {
                        id: teacherId
                    }
                }
            ]
        };
    }
    return includes;
};

module.exports =  {
    get,
    load,
    list,
    create,
    destroy,
    update
};