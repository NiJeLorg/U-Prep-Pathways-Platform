import {element} from './../models';

const get = async (req, res) => {
    res.sendData(req.element);
};
const load = async (req, res, next, id) => {
    const elementObj = await element
        .findById(id);
    if (!elementObj) {
        return res.sendNotFound();
    }
    req.element = elementObj;
    return next();
};

const list = async (req, res) => {
    const elements = await element.findAll();
    res.sendData(elements);
};




export default {get, load, list};