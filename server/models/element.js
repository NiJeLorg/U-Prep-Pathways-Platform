"use strict";
module.exports = (sequelize, DataTypes) => {
    let Element = sequelize.define(
        "element",
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT
        },
        {
            underscored: true
        }
    );
    Element.associate = models => {
        Element.hasMany(models.component, {
            foreignKey: "element_id",
            as: "components"
        });
    };
    return Element;
};
