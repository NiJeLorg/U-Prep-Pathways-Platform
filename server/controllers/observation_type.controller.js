import {observation_type, observation_type_property} from './../models';

const get = async (req, res) => {
    res.sendData(req.observation_type);
};
const load = async (req, res, next, id) => {
    const observationType = await observation_type
        .findById(id, {
            include: [{
                model: observation_type_property,
                as: 'observation_type_properties',
                required: false
            }]
        });
    if (!observationType) {
        return res.sendNotFound();
    }
    req.observation_type = observationType;
    return next();
};
const list = async (req, res) => {
    const observationTypes = await observation_type.all();
    res.sendData(observationTypes);
};

export default {get, load, list};