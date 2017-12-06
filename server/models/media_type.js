'use strict';
module.exports = (sequelize, DataTypes) => {
    let MediaType = sequelize.define('MediaType', {
        name: DataTypes.STRING
    }, {
        classMethods: {}
    });
    return MediaType;
};