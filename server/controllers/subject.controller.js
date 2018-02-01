import {subject, teacher} from './../models';


const get = async (req, res) => {
    res.sendData(req.subject);
};

/**
 * Loads an existing observation based on its ID
 * @returns {observation}
 */
const load = async (req, res, next, id) => {
    const subjectObj = await subject.findById(req.params.subjectId, getIncludes());
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

    const subjects =  await subject.all(getIncludes());
    res.sendData(subjects)
};

const getIncludes = (req) => {
    const teacherId =  req.param.teacherId || req.query.teacherId;
    includes = {}
    if (teacherId){
        includes = {
            include: [
                {
                    required: true,
                    model: teacher,
                    where: {id: teacherId}
                }
            ]
        };
    }
    return includes;
};


export default {get, load, list};