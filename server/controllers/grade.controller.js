import {grade, teacher} from './../models';

function get(req, res) {
    return grade
        .all()
        .then(grades => res.sendOk(grades))
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
            return res.sendOk(grade);
        })
        .catch((error) => res.status(400).send(error));
}

export default {get, load};