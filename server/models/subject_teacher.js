'use strict';
module.exports = (sequelize, DataTypes) => {
    let SubjectTeacher = sequelize.define('subject_teacher', {
        grade_id: DataTypes.INTEGER
    }, {underscored: true});
    return SubjectTeacher;
};
