const observation_cluster = require('../models/observation_cluster')

const get = async (req, res) => {
    return res.sendData(req.observation_cluster);
};
const list = async (req, res) => {
    const observationClusters = await observation_cluster.all();
    res.sendData(observationClusters);
};
const create = async (req, res) => {
    const observationClusterObj = await observation_cluster
        .create({
            observation_id: req.body.observation_id,
            cluster_id: req.body.cluster_id,
        });
    res.sendData(observationClusterObj);
};
const load = async (req, res, next, id) => {
    const observationClusterObj = await observation_clusters
        .findById(req.params.observationClusterId);
    if (!observationClusterObj) {
        return res.sendNotFound();
    }
    req.observation_cluster = observationClusterObj;
    return next();
};
const remove = async (req, res) => {
    const observation_cluster = req.observation_cluster;
    const deletedObservationCluster = observation_cluster.destroy();
    res.sendData(deletedObservationCluster);
};


module.exports = {get, load, list, create, remove};