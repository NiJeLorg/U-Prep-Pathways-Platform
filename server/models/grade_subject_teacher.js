'use strict';
module.exports = (sequelize, DataTypes) => {
    let GradeSubjectTeacher = sequelize.define('grade_subject_teacher', {
        subject_id: DataTypes.INTEGER,
        teacher_id: DataTypes.INTEGER,
        grade_id: DataTypes.INTEGER
    }, {underscored: true});
    return GradeSubjectTeacher;
};
