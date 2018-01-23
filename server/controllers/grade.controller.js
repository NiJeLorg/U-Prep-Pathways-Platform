import {grade, teacher} from './../models';

function get(req, res) {
    return grade
        .all()
        .then(grades => res.sendData(grades))
        .catch(error => res.sendBadRequest(error));

}

function load(req, res, next, id) {
    return grade
        .findById(req.params.gradeId, {
            include: [{
                required: false,
                model: teacher,
                as: 'teachers',
                where: {school_id: 2}
            }],
        })
        .then((grade) => {
            if (!grade) {
                return res.sendNotFound();
            }
            return res.sendData(grade);
        })
        .catch((error) => res.sendBadRequest());
}

export default {get, load};