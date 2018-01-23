'use strict';
module.exports = (sequelize, DataTypes) => {
    let Subject = sequelize.define('subject', {
        name: DataTypes.STRING
    }, {
        underscored: true

    });
    Subject.associate = (models) => {
        Subject.belongsToMany(models.teacher, {
            foreignKey: 'subject_id',
            through: models.subject_teacher,
            as: 'teachers'
        });
    };
    return Subject;
};