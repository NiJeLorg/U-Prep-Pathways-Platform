"use strict";
module.exports = (sequelize, DataTypes) => {
    let Grade = sequelize.define(
        "grade",
        {
            name: DataTypes.STRING
        },
        {
            underscored: true
        }
    );

    Grade.associate = models => {
        Grade.belongsToMany(models.teacher, {
            foreignKey: "grade_id",
            through: models.grade_teacher,
            as: "teachers"
        });
        Grade.belongsToMany(models.school, {
            foreignKey: "grade_id",
            through: models.grade_school,
            as: "schools"
        });
    };
    return Grade;
};
