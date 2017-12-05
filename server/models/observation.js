'use strict';
module.exports = (sequelize, DataTypes) => {
    let Observation = sequelize.define('Observation', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        classMethods: {}
    });
    return Observation;
};