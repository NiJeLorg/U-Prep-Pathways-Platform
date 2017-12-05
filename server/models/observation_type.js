'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationType = sequelize.define('ObservationType', {
        name: DataTypes.STRING
    }, {
        classMethods: {}
    });
    return ObservationType;
};