'use strict';
module.exports = (sequelize, DataTypes) => {
    let Observation = sequelize.define('observation', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {underscored: true});

    // Observation.associate = (models) => {
    //     Observation.belongsTo(models.observation_type, {
    //         foreignKey: 'observation_type_id',
    //         onDelete: 'CASCADE',
    //     });
    // };
    return Observation;
};