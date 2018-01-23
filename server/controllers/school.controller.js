import {school, grade} from './../models';

function get(req, res){
    return school
        .all()
        .then(schools => res.sendData(schools))
        .catch(error => res.sendBadRequest());

}

function load(req, res, next, id){
    return school
        .findById(req.params.schoolId, {
            include: ['grades'],
        })
        .then((school) => {
            if (!school) {
                return res.sendNotFound();
            }
            return res.sendData(school);
        })
        .catch((error) => res.sendBadRequest());
}

export default {get, load};