import {observation_cluster} from './../models';

function list(req, res){
    return observation_cluster
        .all()
        .then(observation_clusters => res.sendData(observation_clusters))
        .catch(error => res.sendBadRequest());

}

function get(req, res) {
    return res.sendData(req.observation_cluster);
}

function create(req, res) {
    return observation_cluster
        .create({
           observation_id: req.body.observation_id,
           cluster_id: req.body.cluster_id,
        })
        .then(observation_cluster => res.sendData(observation_cluster))
        .catch(error => res.sendBadRequest(error));
}

function remove(req, res) {
    const observation_cluster = req.observation_cluster;
    observation_cluster.destroy()
        .then(deletedObservationCluster => res.sendData(deletedObservationCluster))
        .catch(e => next(e));
}
function load(req, res, next, id){
    return observation_clusters
        .findById(req.params.observationClusterId)
        .then((observation_cluster) => {
            if (!observation_cluster) {
                return res.sendNotFound();
            }
            req.observation_cluster = observation_cluster;
            return next();
        })
        .catch((error) => res.sendBadRequest());
}

export default {get, load, list, create, remove};