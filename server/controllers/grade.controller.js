import {grade} from './../models';

function get(req, res){
    return grade
        .all()
        .then(grades => res.status(200).send({"data": grades}))
        .catch(error => res.status(400).send(error));

}

function load(req, res, next, id){
    return grade
        .findById(req.params.gradeId,)
        .then((grade) => {
            if (!grade) {
                return res.status(404).send({
                    message: 'Grade Not Found',
                });
            }
            return res.status(200).send({"data": grade});
        })
        .catch((error) => res.status(400).send(error));
}

export default {get, load};