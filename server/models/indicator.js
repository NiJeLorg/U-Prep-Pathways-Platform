'use strict';
module.exports = (sequelize, DataTypes) => {
    let Indicator = sequelize.define('indicator', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {underscored: true});

    Indicator.associate = (models) => {
        Indicator.belongsToMany(models.level, {
            foreignKey: 'indicator_id',
            through: models.indicator_level,
            as: 'levels',
        });
        Indicator.belongsTo(models.component, {
            foreignKey: 'component_id',
            onDelete: 'CASCADE',
        });
    };

    return Indicator;
};
