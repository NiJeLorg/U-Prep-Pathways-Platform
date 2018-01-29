'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationEvidence = sequelize.define('observation_evidence', {
        name: DataTypes.STRING,
        link: DataTypes.STRING,
    }, {
        underscored: true
    });

    ObservationEvidence.associate = (models) => {
        ObservationEvidence.belongsTo(models.observation, {
            foreignKey: 'observation_id',
        });
        ObservationEvidence.belongsTo(models.media_type, {
            foreignKey: 'media_type_id',
        });
    };
    return ObservationEvidence;
};