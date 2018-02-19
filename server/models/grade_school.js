'use strict';
module.exports = (sequelize, DataTypes) => {
    let GradeSchool = sequelize.define('grade_school', {}, {underscored: true});
    return GradeSchool;
};
