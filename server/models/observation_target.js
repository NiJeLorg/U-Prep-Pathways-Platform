'use strict';
module.exports = (sequelize, DataTypes) => {
    let ObservationTarget = sequelize.define('ObservationTarget', {
        school_id: DataTypes.INTEGER,
        teacher_id: DataTypes.INTEGER,
        grade_id: DataTypes.INTEGER,
        subject_id: DataTypes.INTEGER,
        observation_id: DataTypes.INTEGER

    }, {
        underscored: true
    });
    return ObservationTarget;
};