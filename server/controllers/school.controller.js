import {school, grade} from './../models';

function get(req, res){
    return school
        .all()
        .then(schools => res.status(200).send({"data": schools}))
        .catch(error => res.status(400).send(error));

}

function load(req, res, next, id){
    return school
        .findById(req.params.schoolId, {
            include: ['grades'],
        })
        .then((school) => {
            if (!school) {
                return res.status(404).send({
                    message: 'School Not Found',
                });
            }
            return res.status(200).send({"data": school});
        })
        .catch((error) => res.status(400).send(error));
}

export default {get, load};