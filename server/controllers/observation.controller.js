const models = require("../models/index"),
    school = models.school,
    observation = models.observation,
    observation_evidence = models.observation_evidence,
    observation_cluster = models.observation_cluster,
    cluster = models.cluster,
    observation_type = models.observation_type,
    observation_type_property_data = models.observation_type_property_data,
    observation_type_property = models.observation_type_property;

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
            "observation_type_property"
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
                "observation_type_property"
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
    await observation_evidence.bulkCreate(attachments);
    const cluster_ids = req.body.cluster_ids;
    const observation_type_property_data =
        req.body.observation_type_property_data;

    //Save property Data
    if (observation_type_property_data) {
        for (let propertyData of observation_type_property_data) {
            const oType = await observation_type_property.findById(
                Object.keys(propertyData)[0]
            );
            if (oType) {
                await oType.addObservations(observation, {
                    through: { value: Object.values(propertyData)[0] }
                });
            }
        }
    }

    if (cluster_ids) {
        await observation_cluster.destroy({
            where: {
                observation_id: observation.id,
                cluster_id: { [Op.notIn]: cluster_ids }
            }
        });
        const existing_observed_cluster = observation.clusters.map(
            cluster => cluster.id
        );
        const new_observed_clusters = cluster_ids.map(cluster_id => {
            if (
                !(
                    existing_observed_cluster !== undefined &&
                    existing_observed_cluster.includes(cluster_id)
                )
            )
                return {
                    observation_id: observation.id,
                    cluster_id: cluster_id
                };
        });
        await observation_cluster.bulkCreate(new_observed_clusters);
    }
    await savedObseravtion.reload();
    res.sendData(savedObseravtion);
};

const saveObservationTypePropertyData = async data => {
    await observation_type_property_data.bulkCreate(data);
};

const remove = async (req, res, next) => {
    const observation = req.observation;
    let deletedObservation = await observation.destroy();
    res.sendData(deletedObservation);
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

const getClusterIdFromReqBody = async req => {
    const clusters = cluster.all({ attributes: ["id"], raw: true });
    let matchedClusters = clusters.filter(cluster => {
        return (
            Object.prototype.hasOwnProperty.call(
                req.body,
                `cluster_${cluster.id}`
            ) === true
        );
    });
    return matchedClusters.map(cluster => {
        return cluster.id;
    });
};

const extractDynamicProperties = (req, pattern) => {
    return Object.entries(req.body).filter(entry => {
        return entry[0].match(pattern) !== null;
    });
};
const getObservationTypePropertyDataFromReqBody = (req, observationId) => {
    const propertData = extractDynamicProperties(req, /property_[0-9]+$/);
    return propertData.map(entry => {
        return {
            observation_id: observationId,
            observation_type_property_id: parseInt(entry[0].split("_")[1]),
            value: entry[1]
        };
    });
};

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
