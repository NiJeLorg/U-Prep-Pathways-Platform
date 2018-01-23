import {observation_type} from './../models';

function get(req, res){
    return observation_type
        .all()
        .then(observation_types => res.status(200).send({"data": observation_types}))
        .catch(error => res.status(400).send(error));

}

function load(req, res, next, id){
    return observation_types
        .findById(req.params.observationTypeId)
        .then((observation_type) => {
            if (!school) {
                return res.status(404).send({
                    message: 'Observaton Type Not Found',
                });
            }
            return res.status(200).send({"data": observation_type});
        })
        .catch((error) => res.status(400).send(error));
}

export default {get, load};