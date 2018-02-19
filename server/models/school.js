'use strict';
module.exports = (sequelize, DataTypes) => {
    let School = sequelize.define('school', {
        name: DataTypes.STRING,
        address: DataTypes.STRING
    },{
        underscored: true
    });
    School.associate = (models) => {
        School.hasMany(models.teacher, {
            foreignKey: 'school_id',
            as: 'teachers',
        });
        School.hasMany(models.observation, {
            foreignKey: 'school_id',
            as: 'observations',
        });
        School.belongsToMany(models.grade, {
            foreignKey: 'school_id',
            through: models.grade_school,
            onDelete: 'CASCADE',
            as: 'grades'
        });
        School.belongsTo(models.district, {
            foreignKey: 'district_id',
        });
    };
    return School;
};
