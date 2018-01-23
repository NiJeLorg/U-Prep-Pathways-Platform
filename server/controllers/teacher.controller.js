import {subject, teacher} from './../models';

function get(req, res) {
    return teacher
        .all()
        .then(teachers => res.status(200).send({"data": teachers}))
        .catch(error => res.status(400).send(error));

}

function load(req, res, next, id) {
    return teacher
        .findById(req.params.teacherId, { include: ['subjects']})
        .then((teacher) => {
            if (!teacher) {
                return res.status(404).send({
                    message: 'Teacher Not Found',
                });
            }
            return res.status(200).send({"data": teacher});
        })
        .catch((error) => res.status(400).send(error));
}

export default {get, load};