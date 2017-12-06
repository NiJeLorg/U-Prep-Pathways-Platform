'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationType = sequelize.define('ObservationType', {
        name: DataTypes.STRING
    }, {
        underscored: true
    });
    return ObservationType;
};