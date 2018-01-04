'use strict';
module.exports = (sequelize, DataTypes) => {
    let School = sequelize.define('School', {
        name: DataTypes.STRING,
        address: DataTypes.STRING
    });
    School.associate = (models) => {
        School.hasMany(models.teacher, {
            foreignKey: 'school_id',
            as: 'teachers',
        });
    };
    return School;
};
