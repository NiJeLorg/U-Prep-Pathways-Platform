'use strict';
module.exports = (sequelize, DataTypes) => {
    let Component = sequelize.define('component', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        underscored: true
    });
    Component.associate = (models) => {
        Component.hasMany(models.Indicator, {
            foreignKey: 'component_id',
            as: 'indicators',
        });
        Component.belongsTo(models.Element, {
            foreignKey: 'element_id',
            onDelete: 'CASCADE',
        });
    };
    return Component;
};
