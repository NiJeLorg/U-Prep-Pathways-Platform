'use strict';
module.exports = (sequelize, DataTypes) => {
    let Group = sequelize.define('Group', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {underscored: true});
    return Group;
};