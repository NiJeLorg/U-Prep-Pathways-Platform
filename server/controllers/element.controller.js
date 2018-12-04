const models = require("../models/index"),
    element = models.element,
    component = models.component,
    indicator = models.indicator;

const get = async (req, res) => {
    res.sendData(req.element);
};
const load = async (req, res, next, id) => {
    const elementObj = await element.findById(id);
    if (!elementObj) {
        return res.sendNotFound();
    }
    req.element = elementObj;
    return next();
};

const list = async (req, res) => {
    const elements = await element.findAll({
        include: [
            {
                model: component,
                as: "components",
                include: {
                    model: indicator,
                    as: "indicators"
                }
            }
        ]
    });
    res.sendData(elements);
};

module.exports = { get, load, list };
