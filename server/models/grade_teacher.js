'use strict';
module.exports = (sequelize, DataTypes) => {
    let GradeTeacher = sequelize.define('grade_teacher', {}, {underscored: true});
    return GradeTeacher;
};
