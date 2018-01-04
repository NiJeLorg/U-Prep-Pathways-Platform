'use strict';
module.exports = (sequelize, DataTypes) => {
    let School = sequelize.define('school', {
        name: DataTypes.STRING,
        address: DataTypes.STRING
    });
    School.associate = (models) => {
        School.hasMany(models.teacher, {
            foreignKey: 'school_id',
            as: 'teachers',
        });
        School.belongsTo(models.district, {
            foreignKey: 'district_id',
        });
    };
    return School;
};
