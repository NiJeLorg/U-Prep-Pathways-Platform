'use strict';
module.exports = (sequelize, DataTypes) => {
    let IndicatorLevel = sequelize.define('indicator_level', {
        description: DataTypes.TEXT
    }, {underscored: true});
    return IndicatorLevel;
};
