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
        .findById(req.params.observationId)
        .then((observation) => {
            if (!observation) {
                return res.sendNotFound();
            }
            req.observation = observation;
            return next();
        })
        .catch((error) => res.sendBadRequest());

}

/**
 * Update existing observation
 * @returns {observation}
 */
function update(req, res, next) {
    const observation = req.observation;
    observation.name = req.body.name;
    observation.description = req.body.description;
    observation.attachments = generateAttachments(req);
    observation.status = req.body.status;
    observation.save()
        .then(savedObseravtion => res.sendData(savedObseravtion))
        .catch(e => next(e));
}

/**
 * Delete observation.
 * @returns {observation}
 */
function remove(req, res, next) {
    const observation = req.observation;
    observation.destroy()
        .then(deletedObservation => res.sendData(deletedObservation))
        .catch(e => next(e));
}

function generateAttachments(req){
    let attachments = [];
    if(req.files) {
        req.files.forEach((file) => {
            attachments.push({
                name: file.filename,
                link: file.path
            })
        });

    }
    return attachments;
}

function create(req, res, next) {

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
            attachments: generateAttachments(req)
        }, {
            include: [{model: observation_evidence, as: "attachments"}]
        })
        .then(observation => res.sendData(observation))
        .catch(error => res.sendBadRequest(error));

}

export default {get, load, create, list, update, remove};