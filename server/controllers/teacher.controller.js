import {subject, teacher, school, grade} from './../models';

const get = async (req, res) => {
    res.sendData(req.teacher);
};
const list = async (req, res) => {
    const teachers = await teacher.all(getIncludes(req));
    res.sendData(teachers)
};
const load = async (req, res, next, id) => {
    const teacherObj = await teacher.findById(id, getIncludes(req));
    if (!teacherObj) {
        return res.sendNotFound();
    }
    req.teacher = teacherObj;
    return next();
};

const getIncludes = (req) => {
    const schoolId = req.params.schoolId || req.query.schoolId;
    const gradeId = req.params.gradeId || req.query.gradeId;
    let includes = {
        attributes: ['id', 'name'], include: [
            {model: subject, as: 'subjects', attributes: ['id', 'name']}
        ]
    };
    if (schoolId) {
        includes.include.push({
            required: true,
            attributes: [],
            model: school,
            where: {id: schoolId}
        });
    }
    if (gradeId) {
        includes.include.push({
            attributes: [],
            model: grade,
            as: 'grades',
            where: {id: gradeId},
            required: true,
        });
    }
    return includes;

};

export default {get, load, list};