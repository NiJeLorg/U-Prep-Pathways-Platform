'use strict';
module.exports = (sequelize, DataTypes) => {
    let SchoolSubject = sequelize.define('school_subject', {
    }, {underscored: true});
    return SchoolSubject;
};
