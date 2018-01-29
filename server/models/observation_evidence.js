'use strict';
import path from 'path';
import fs from 'fs';
module.exports = (sequelize, DataTypes) => {
    let ObservationEvidence = sequelize.define('observation_evidence', {
        name: DataTypes.STRING,
        link: DataTypes.STRING,
    }, {
        underscored: true,
        hooks: {
            afterDestroy: function(attachment) {
                fs.unlink(path.join(path.resolve('./uploads'), attachment.name), (err) => {
                    if (err) {
                        return err
                    }
                });
            }
        }
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