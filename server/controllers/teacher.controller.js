import {
    subject,
    subject_teacher,
    teacher,
    observation,
    school,
    grade
} from './../models';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;
const get = async(req, res) => {
    res.sendData(req.teacher);
};
const list = async(req, res) => {
    const teachers = await teacher.all(getIncludes(req));
    res.sendData(teachers)
};
const load = async(req, res, next, id) => {
    const teacherObj = await teacher.findById(id, getIncludes(req));
    if (!teacherObj) {
        return res.sendNotFound();
    }
    req.teacher = teacherObj;
    return next();
};

const destroy = async(req, res) => {
    const teacherObj = req
        .teacher
        .destroy();
    res.sendData(teacherObj);
};

const getGrade = async(gradeStr) => {
    return grade.findOne({
        where: {
            name: {
                [Op.eq]: gradeStr
            }
        }
    });
};

const getSubject = async(subjectStr) => {
    return subject.findOne({
        where: {
            name: {
                [Op.eq]: subjectStr
            }
        }
    });
};

const getIncludes = (req) => {
    const schoolId = req.params.schoolId || req.query.schoolId;
    const gradeId = req.params.gradeId || req.query.gradeId;
    let includes = {
        attributes: [
            'id', 'name'
        ],
        include: [
            {
                model: subject,
                as: 'subjects',
                attributes: [
                    'id', 'name'
                ],
                through: {
                    as: 'grade',
                    attributes: ['grade_id']
                }
            }, {
                model: observation,
                as: 'observations',
                include: ['grade', 'subject', 'observation_type']
            },
            'scores'
        ]
    };
    if (schoolId) {
        includes
            .include
            .push({
                required: true,
                attributes: [],
                model: school,
                where: {
                    id: schoolId
                }
            });
    } else {
        includes
            .include
            .push('school');
    }
    let gradeAssociaton = {
        attributes: [
            'id', 'name'
        ],
        model: grade,
        as: 'grades'
    };
    if (gradeId) {
        gradeAssociaton.where = {
            id: gradeId
        };
        gradeAssociaton.attributes = [];
    }
    includes
        .include
        .push(gradeAssociaton);
    return includes;

};

const create = async(req, res) => {
    const teacherObj = await teacher.create({name: req.body.name, school_id: req.body.schoolId});
    const grades = req.body.grades;
    const subjects = req.body.subjects;

    for (let grade of grades) {        
        let gradeObj = await getGrade(grade);
        await teacherObj.addGrades(gradeObj);
        for (let subjectId of subjects) {
            let subjectObj = await subject.findById(subjectId);
            await subject_teacher.create({grade_id: gradeObj.id, teacher_id: teacherObj.id, subject_id: subjectObj.id});
        }
    }
    res.sendData(teacherObj);
}

export default {
    get,
    load,
    list,
    create,
    destroy
};
