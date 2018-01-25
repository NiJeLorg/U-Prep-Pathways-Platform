import {grade, teacher, school} from './../models';

function get(req, res) {
    let schoolId = req.params.schoolId || req.query.schoolId;
    if (schoolId){
        getGradeSchools(schoolId, res);
    }else{
        getGrades(req, res)
    }

}

function getGradeSchools(schoolId, res){
    return grade.findAll({
        attributes : ['id', 'name'],
        include: [{
            attributes: [],
            required: true,
            model: school,
            as: 'schools',
            where: {id: schoolId}
        }],
    })
        .then(grades => res.sendData(grades))
        .catch(error => res.sendBadRequest(error));
}

function getGrades(req, res){
    return grade.findAll({ attributes : ['id', 'name']})
        .then(grades => res.sendData(grades))
        .catch(error => res.sendBadRequest(error));
}

function load(req, res, next, id) {
    let schoolId = req.params.schoolId || req.query.schoolId;
    let includes = {};
    if (schoolId){
        includes = {
            include: [{
                attributes: ['id', 'name'],
                required: false,
                model: teacher,
                as: 'teachers',
                where: {school_id: schoolId}
            }],
        }
    }
    return grade
        .findById(req.params.gradeId, includes)
        .then((grade) => {
            if (!grade) {
                return res.sendNotFound();
            }
            return res.sendData(grade)  ;
        })
        .catch((error) => res.sendBadRequest());
}

export default {get, load};