'use strict';
module.exports = (sequelize, DataTypes) => {
    let Component = sequelize.define('component', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {
        underscored: true
    });
    Component.associate = (models) => {
        Component.hasMany(models.indicator, {
            foreignKey: 'component_id',
            as: 'indicators',
        });
        Component.belongsTo(models.element, {
            foreignKey: 'element_id',
            onDelete: 'CASCADE',
        });
    };
    return Component;
};
