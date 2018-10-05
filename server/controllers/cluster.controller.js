const cluster =  require('../models/cluster');

const get = async (req, res) => {
    res.sendData(req.cluster);
};
const list = async (req, res) => {
    const clusters = await cluster.findAll();
    res.sendData(clusters);
};
const load = async (req, res, next, id) => {
    const clusterObj = await cluster
        .findById(id, getIncludes(req));
    if (!clusterObj) {
        return res.sendNotFound();
    }
    req.cluster = clusterObj;
    return next();
};

const getIncludes = (req) => {
    return {
    }
};

module.exports =  {get, load, list};