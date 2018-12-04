"use strict";
module.exports = (sequelize, DataTypes) => {
    let Teacher = sequelize.define(
        "teacher",
        {
            name: DataTypes.STRING
        },
        {
            underscored: true
        }
    );
    Teacher.associate = models => {
        Teacher.belongsTo(models.school, {
            foreignKey: "school_id"
        });
        Teacher.belongsToMany(models.grade, {
            foreignKey: "teacher_id",
            through: models.grade_teacher,
            as: "grades"
        });
        Teacher.belongsToMany(models.subject, {
            foreignKey: "teacher_id",
            through: models.subject_teacher,
            as: "subjects"
        });
        Teacher.hasMany(models.observation, {
            foreignKey: "teacher_id"
        });
        Teacher.hasMany(models.score, {
            foreignKey: "teacher_id"
        });
    };
    return Teacher;
};
