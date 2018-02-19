'use strict';
module.exports = (sequelize, DataTypes) => {
    let SubjectTeacher = sequelize.define('subject_teacher', {}, {underscored: true});
    return SubjectTeacher;
};
