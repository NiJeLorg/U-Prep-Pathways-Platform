import {subject, teacher, school, grade} from './../models';

function get(req, res) {
    let schoolId = req.params.schoolId || req.query.schoolId;
    let gradeId = req.params.gradeId || req.query.gradeId;
    let includes = {};
    if (schoolId && gradeId){
        includes = {
            attributes: ['id', 'name'],
            include: [
                {
                    required: true,
                    attributes: [],
                    model: school,
                    where: {id: schoolId}
                }, {
                    attributes: [],
                    model: grade,
                    as: 'grades',
                    where: {id: gradeId},
                    required: true,
                }

            ]
        };
    }
    return teacher
        .findAll(includes)
        .then(teachers => res.sendData(teachers))
        .catch(error => res.sendBadRequest());

}

function load(req, res, next, id) {
    let schoolId = req.params.schoolId || req.query.schoolId;
    let gradeId = req.params.gradeId || req.query.gradeId;
    let includes = {};
    if (schoolId && gradeId){
        includes = {
            attributes: ['id', 'name'],
            include: [
                {model: subject,as: 'subjects', attributes: ['id', 'name']},
                { attributes: [], required: true, model: school, where: {id: schoolId}},
                { attributes: [], required: true, model: grade, as: 'grades', where: {id: gradeId}}
            ]
        }
    }
    return teacher
        .findById(req.params.teacherId, includes)
        .then((teacher) => {
            if (!teacher) {
                return res.sendNotFound();
            }
            return res.sendData(teacher);
        })
        .catch((error) => res.sendBadRequest());
}

export default {get, load};