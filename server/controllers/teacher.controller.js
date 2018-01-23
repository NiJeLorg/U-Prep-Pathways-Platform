import {subject, teacher} from './../models';

function get(req, res) {
    return teacher
        .all()
        .then(teachers => res.sendData(teachers))
        .catch(error => res.sendBadRequest());

}

function load(req, res, next, id) {
    return teacher
        .findById(req.params.teacherId, { include: ['subjects']})
        .then((teacher) => {
            if (!teacher) {
                return res.sendNotFound();
            }
            return res.sendData(teacher);
        })
        .catch((error) => res.sendBadRequest());
}

export default {get, load};