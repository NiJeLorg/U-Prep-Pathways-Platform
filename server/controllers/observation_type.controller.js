import {observation_type, observation_type_property} from './../models';

function get(req, res){
    return observation_type
        .all()
        .then(observation_types => res.sendData(observation_types))
        .catch(error => res.sendBadRequest(error));

}

function load(req, res, next, id){
    return observation_type
        .findById(req.params.observationTypeId,
            {
                include: [{model: observation_type_property, as: 'observation_type_properties',  required: false}]
            })
        .then((observation_type) => {
            if (!observation_type) {
                return res.sendNotFound();
            }
            return res.sendData(observation_type);
        })
        .catch((error) => res.sendBadRequest());
}

export default {get, load};