import {school, observation, observation_evidence} from './../models';

function get(req, res) {
    return res.sendData(req.observation);
}

function list(req, res) {
    return observation
        .all()
        .then(observations => res.sendData(observations))
        .catch(error => res.sendBadRequest());
}

function load(req, res, next, id) {
    return observation
        .findById(req.params.obserationId)
        .then((observation) => {
            if (!observation) {
                return res.sendNotFound();
            }
            req.observation = observation;
            return next();
        })
        .catch((error) => res.sendBadRequest());

}

function update(req, res, next, id){

}

function create(req, res, next) {
    let attachments = [];
    if(req.files) {
       req.files.forEach((file) => {
           attachments.push({
               name: file.filename,
               link: file.path
           })
       });

    }
    return observation
        .create({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            teacher_id: req.body.teacher_id,
            subject_id: req.body.subject_id,
            grade_id: req.body.grade_id,
            school_id: req.body.school_id,
            user_id: req.body.user_id,
            observation_type_id: req.body.observation_type_id,
            attachments: attachments
        }, {
            include: [{model: observation_evidence, as: "attachments"}]
        })
        .then(observation => res.sendData(observation))
        .catch(error => res.sendBadRequest(error));

}

export default {get, load, create, list, update};