const models = require("../models/index"),
    grade = models.grade,
    teacher = models.teacher,
    school = models.school;

const get = async (req, res) => {
    res.sendData(req.grade);
};
const load = async (req, res, next, id) => {
    const gradeObj = await grade.findById(id, getIncludes(req));
    if (!gradeObj) {
        return res.sendNotFound();
    }
    req.grade = gradeObj;
    return next();
};
const list = async (req, res) => {
    const grades = await grade.findAll(getIncludes(req));
    res.sendData(grades);
};

const create = async (req, res) => {
    const gradeObj = await grade.create({ name: req.body.grade });
    res.sendData(gradeObj);
};

const destroy = async (req, res) => {
    const gradeObj = req.grade.destroy();
    res.sendData(gradeObj);
};

const update = async (req, res) => {
    const gradeObj = req.grade.update({ name: req.body.name });
    res.sendData(gradeObj);
};

const getIncludes = req => {
    const schoolId = req.params.schoolId || req.query.schoolId;
    const gradeId = req.params.gradeId;
    let includes = {
        attributes: ["id", "name"]
    };
    if (schoolId && gradeId === undefined) {
        includes.include = [
            {
                attributes: [],
                required: true,
                model: school,
                as: "schools",
                where: {
                    id: schoolId
                }
            }
        ];
    } else if (schoolId && gradeId) {
        includes.include = [
            {
                attributes: ["id", "name"],
                required: false,
                model: teacher,
                as: "teachers",
                where: {
                    school_id: schoolId
                }
            }
        ];
    }
    return includes;
};

module.exports = {
    get,
    load,
    list,
    create,
    destroy,
    update
};
