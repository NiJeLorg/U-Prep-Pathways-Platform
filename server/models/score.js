"use strict";
module.exports = (sequelize, DataTypes) => {
    let Score = sequelize.define(
        "score",
        {
            // name: DataTypes.STRING,
        },
        {
            underscored: true
        }
    );
    Score.associate = models => {
        Score.belongsTo(models.school, {
            foreignKey: "school_id"
        });
        Score.belongsTo(models.teacher, {
            foreignKey: "teacher_id"
        });
        Score.belongsTo(models.subject, {
            foreignKey: "subject_id"
        });
        Score.belongsTo(models.grade, {
            foreignKey: "grade_id"
        });
        Score.hasMany(models.indicator_score, {
            foreignKey: "score_id",
            as: "indicator_scores"
        });
    };
    return Score;
};
