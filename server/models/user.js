"use strict";
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        bio: DataTypes.STRING,
        profile_pic: DataTypes.STRING
    });
    return User;
};
