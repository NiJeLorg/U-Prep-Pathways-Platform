'use strict';
module.exports = (sequelize, DataTypes) => {
    let Indicator = sequelize.define('indicator', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {underscored: true});

    Indicator.associate = (models) => {
        Indicator.hasMany(models.Level, {
            foreignKey: 'indicator_id',
            as: 'levels',
        });
        Indicator.belongsTo(models.Component, {
            foreignKey: 'component_id',
            onDelete: 'CASCADE',
        });
    };

    return Indicator;
};
