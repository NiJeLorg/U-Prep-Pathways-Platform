'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
      username: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      bio: DataTypes.STRING,
      profile_pic: DataTypes.STRING
  });
  // User.associate = (models) => {
  //   User.belongsTo(models.group, {
  //     foreignKey: 'groupId',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return User;
};
