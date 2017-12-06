'use strict';
module.exports = (sequelize, DataTypes) => {
    let Element = sequelize.define('element', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        underscored: true
    });
    Element.associate = (models) => {
        Element.hasMany(models.Component, {
            foreignKey: 'element_id',
            as: 'components',
        });
    };
    return Element;
};
