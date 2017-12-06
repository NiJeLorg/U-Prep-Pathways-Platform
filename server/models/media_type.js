'use strict';
module.exports = (sequelize, DataTypes) => {
    let MediaType = sequelize.define('media_type', {
        name: DataTypes.STRING
    }, {
        underscored: true
    });
    return MediaType;
};