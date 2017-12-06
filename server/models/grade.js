'use strict';
module.exports = (sequelize, DataTypes) => {
    let Grade = sequelize.define('grade', {
        name: DataTypes.STRING
    }, {
        underscored: true
    });
    return Grade;
};