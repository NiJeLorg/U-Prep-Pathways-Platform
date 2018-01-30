'use strict';
module.exports = (sequelize, DataTypes) => {
    let Observation = sequelize.define('observation', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {underscored: true});

    Observation.associate = (models) => {
        Observation.belongsTo(models.observation_type, {
            foreignKey: 'observation_type_id',
        });
        Observation.belongsTo(models.school, {
            foreignKey: 'school_id',
        });
        Observation.belongsTo(models.teacher, {
            foreignKey: 'teacher_id',
        });
        Observation.belongsTo(models.grade, {
            foreignKey: 'grade_id',
        });

        Observation.hasMany(models.observation_evidence, {
            foreignKey: 'observation_id',
            as: 'attachments',
            onDelete: 'CASCADE',
            hooks: true
        });
    };

    return Observation;
};