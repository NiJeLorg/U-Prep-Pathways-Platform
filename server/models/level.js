'use strict';
module.exports = (sequelize, DataTypes) => {
    let Level = sequelize.define('level', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {underscored: true});
    Level.associate = (models) => {
        Level.belongsToMany(models.indicator, {
            foreignKey: 'level_id',
            through: models.indicator_level,
            onDelete: 'CASCADE',
        });
    };
    return Level;
};
