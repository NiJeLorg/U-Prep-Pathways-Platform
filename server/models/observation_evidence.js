'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationEvidence = sequelize.define('observation_evidence', {
        name: DataTypes.STRING,
        link: DataTypes.STRING,
    }, {
        underscored: true
    });

    ObservationEvidence.associate = (models) => {
        ObservationEvidence.belongsTo(models.Observation, {
            foreignKey: 'observation_id',
            onDelete: 'CASCADE',
        });
        ObservationEvidence.belongsTo(models.MediaType, {
            foreignKey: 'media_type_id',
            onDelete: 'CASCADE',
        });
    };
    return ObservationEvidence;
};