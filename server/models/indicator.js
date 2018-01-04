'use strict';
module.exports = (sequelize, DataTypes) => {
    let Indicator = sequelize.define('indicator', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {underscored: true});



    return Indicator;
};
