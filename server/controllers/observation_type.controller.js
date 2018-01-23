import {observation_type} from './../models';

function get(req, res){
    return observation_type
        .all()
        .then(observation_types => res.sendData(observation_types))
        .catch(error => res.sendBadRequest(error));

}

function load(req, res, next, id){
    return observation_types
        .findById(req.params.observationTypeId)
        .then((observation_type) => {
            if (!school) {
                return res.sendNotFound();
            }
            return res.sendData(observation_type);
        })
        .catch((error) => res.sendBadRequest());
}

export default {get, load};