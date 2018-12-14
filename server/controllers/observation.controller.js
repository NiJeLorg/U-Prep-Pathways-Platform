const models = require("../models/index"),
    school = models.school,
    observation = models.observation,
    observation_evidence = models.observation_evidence,
    observation_cluster = models.observation_cluster,
    cluster = models.cluster,
    observation_type = models.observation_type,
    property_data = models.property_data,
    observation_type_property = models.observation_type_property;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const get = async (req, res) => {
    res.sendData(req.observation);
};

const list = async (req, res) => {
    const observations = await observation.all({
        include: [
            "attachments",
            "school",
            "clusters",
            "subject",
            "teacher",
            "grade",
            "observation_type",
            "properties_data"
        ]
    });
    res.sendData(observations);
};

const load = async (req, res, next, id) => {
    const observationObj = await observation.findById(
        req.params.observationId,
        {
            include: [
                "attachments",
                "subject",
                "school",
                "teacher",
                "grade",
                "observation_type",
                "clusters",
                "properties_data"
            ]
        }
    );
    if (!observationObj) {
        return res.sendNotFound();
    }
    req.observation = observationObj;
    return next();
};

const update = async (req, res, next) => {
    let observation = req.observation;
    observation.name = req.body.name;
    observation.description = req.body.description;
    observation.teacher_id = req.body.teacher_id;
    observation.grade_id = req.body.grade_id;
    observation.school_id = req.body.school_id;
    observation.subject_id = req.body.subject_id;
    observation.status = req.body.status;
    let savedObseravtion = await observation.save();
    const attachments = generateAttachments(req, savedObseravtion);
    const observation_type_property_data =
        req.body.observation_type_property_data;

    if (observation_type_property_data) {
        observation_type_property_data.map(observationData => {
            updateOrCreate(
                property_data,
                { id: observationData.id },
                observationData
            );
        });
    }

    await observation_evidence.bulkCreate(attachments);

    await savedObseravtion.reload();
    res.sendData(savedObseravtion);
};

const remove = async (req, res, next) => {
    const observation = req.observation;
    let deletedObservation = await observation.destroy();
    res.sendData(deletedObservation);
};

const updateOrCreate = (model, where, item) => {
    model.findOne({ where: where }).then(obj => {
        if (!obj) {
            model.create(item);
        } else {
            model.update(item, {
                where: where
            });
        }
    });
};

function generateAttachments(req, observation) {
    let attachments = [];
    if (req.files) {
        req.files.forEach(file => {
            let item = {
                name: file.filename,
                link: file.path
            };
            if (observation) {
                item["observation_id"] = observation.id;
            }
            attachments.push(item);
        });
    }
    return attachments;
}

const create = async (req, res, next) => {
    const observationObj = await observation.create(
        {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            teacher_id: req.body.teacher_id,
            subject_id: req.body.subject_id,
            grade_id: req.body.grade_id,
            school_id: req.body.school_id,
            user_id: req.body.user_id || 1,
            observation_type_id: req.body.observation_type_id,
            attachments: generateAttachments(req)
        },
        {
            include: [{ model: observation_evidence, as: "attachments" }]
        }
    );
    res.sendData(observationObj);
};

module.exports = { get, load, create, list, update, remove };
