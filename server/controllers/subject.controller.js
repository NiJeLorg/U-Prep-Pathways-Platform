import {subject, teacher} from './../models';


const get = async (req, res) => {
    res.sendData(req.subject);
};

/**
 * Loads an existing subject based on its ID
 * @returns {subject}
 */
const load = async (req, res, next, id) => {
    const subjectObj = await subject.findById(req.params.subjectId, getIncludes(req));
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
const list = async (req, res) => {

    const subjects =  await subject.all(getIncludes(req));
    res.sendData(subjects)
};

const getIncludes = (req) => {
    const teacherId =  req.params.teacherId || req.query.teacherId;
    let includes = {};
    if (teacherId){
        includes = {
            include: [
                {   attributes: [],
                    required: true,
                    model: teacher,
                    as: 'teachers',
                    where: {id: teacherId}
                }
            ]
        };
    }
    return includes;
};


export default {get, load, list};