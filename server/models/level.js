'use strict';
module.exports = (sequelize, DataTypes) => {
    let Level = sequelize.define('level', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {underscored: true});
    Level.associate = (models) => {
        Level.belongsTo(models.Indicator, {
            foreignKey: 'indicator_id',
            onDelete: 'CASCADE',
        });
    };
    return Level;
};
