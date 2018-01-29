'use strict';
module.exports = (sequelize, DataTypes) => {
    let District = sequelize.define('district', {
        name: DataTypes.STRING,
    }, {
        underscored: true
    });
    District.associate = (models) => {
        District.hasMany(models.school, {
            foreignKey: 'district_id',
            as: 'schools',
        });
    };
    return District;
};
