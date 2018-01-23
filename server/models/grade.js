'use strict';
module.exports = (sequelize, DataTypes) => {
    let Grade = sequelize.define('grade', {
        name: DataTypes.STRING
    }, {
        underscored: true
    });

    Grade.associate = (models) => {
        Grade.belongsToMany(models.teacher, {
            foreignKey: 'grade_id',
            through: models.grade_teacher,
            as: 'teachers'
        });

    };
    return Grade;
};