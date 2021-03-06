"use strict";
module.exports = (sequelize, DataTypes) => {
    const Observation = sequelize.define(
        "observation",
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            status: DataTypes.INTEGER
        },
        {
            underscored: true
        }
    );
    Observation.associate = models => {
        Observation.belongsTo(models.observation_type, {
            foreignKey: "observation_type_id"
        });
        Observation.belongsTo(models.school, {
            foreignKey: "school_id"
        });
        Observation.belongsTo(models.teacher, {
            foreignKey: "teacher_id"
        });
        Observation.belongsTo(models.subject, {
            foreignKey: "subject_id"
        });
        Observation.belongsTo(models.grade, {
            foreignKey: "grade_id"
        });
        Observation.belongsToMany(models.cluster, {
            foreignKey: "observation_id",
            through: models.observation_cluster,
            as: "clusters",
            onDelete: "CASCADE"
        });

        Observation.hasMany(models.observation_evidence, {
            foreignKey: "observation_id",
            as: "attachments",
            onDelete: "CASCADE",
            hooks: true
        });

        Observation.hasMany(models.property_data, {
            foreignKey: "observation_id",
            as: "properties_data",
            onDelete: "CASCADE",
            hooks: true
        });

        // Observation.belongsToMany(models.observation_type_property, {
        //     foreignKey: "observation_id",
        //     through: models.observation_type_property_data,
        //     as: "observation_type_property",
        //     onDelete: "CASCADE"
        // });
    };
    return Observation;
};
