'use strict';
module.exports = (sequelize, DataTypes) => {
    let Group = sequelize.define('Group', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {underscored: true});
    Group.associate = (models) => {
        Group.hasMany(models.User, {
            foreignKey: 'groupId',
            as: 'users',
        });
    };
    return Group;
};