'use strict';
module.exports = (sequelize, DataTypes) => {
    let Teacher = sequelize.define('teacher', {
        name: DataTypes.STRING
    });
    Teacher.associate = (models) => {
        Teacher.belongsTo(models.school, {
            foreignKey: 'school_id',
        });
    };
    return Teacher;
};