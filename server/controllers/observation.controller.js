"use strict";
import {school, observation, observation_evidence, observation_cluster} from './../models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

const get = async (req, res) => {
    res.sendData(req.observation);
};

/**
 * Gets List of Observations
 * @returns {observations}
 */
const list = async (req, res) => {
    const observations = await observation
        .all({
            include: ['attachments', 'school', 'clusters', 'subject', 'teacher', 'grade', 'observation_type']
        });
    res.sendData(observations)
};

/**
 * Loads an existing observation based on its ID
 * @returns {observation}
 */
const load = async (req, res, next, id) => {
    const observationObj = await observation
        .findById(req.params.observationId, {
            include: ['attachments', 'subject', 'school', 'teacher', 'grade', 'observation_type', 'clusters']
        });
    if (!observationObj) {
        return res.sendNotFound();
    }
    req.observation = observationObj;
    return next();
};


/**
 * Update existing observation
 * @returns {observation}
 */

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
    if(req.body.cluster_ids){
        await observation_cluster.destroy({
            where: {observation_id: observation.id, cluster_id: {[Op.notIn]: req.body.cluster_ids}}
        });
        const existing_observed_cluster = observation.clusters.map(cluster => cluster.id);
        const new_observed_clusters = req.body.cluster_ids.map((cluster_id) => {
            if (!(existing_observed_cluster != undefined && existing_observed_cluster.includes(cluster_id)))
                return {"observation_id": observation.id, "cluster_id": cluster_id}
        });
        await observation_cluster.bulkCreate(new_observed_clusters);
    }
    await savedObseravtion.reload();
    res.sendData(savedObseravtion)
};


/**
 * Delete observation.
 * @returns {observation}
 */
const remove = async (req, res, next) => {
    const observation = req.observation;
    let deletedObservation = await observation.destroy();
    res.sendData(deletedObservation)
};

/**
 * Generates array of attachment objects
 * @returns {attachments}
 */
function generateAttachments(req, observation) {
    let attachments = [];
    if (req.files) {
        req.files.forEach((file) => {
            let item = {
                name: file.filename,
                link: file.path
            };
            if (observation) {
                item['observation_id'] = observation.id;
            }
            attachments.push(item)
        });

    }
    return attachments;
}

/**
 * Saves a new observation
 * @returns {observation}
 */
const create = async (req, res, next) => {
    const observationObj = await observation
        .create({
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
        }, {
            include: [{model: observation_evidence, as: "attachments"}]
        });
    res.sendData(observationObj);

};

export default {get, load, create, list, update, remove};