const { DataTypes } = require("sequelize");

const UserModel = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNULL: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNULL: false,
      },
      name: { type: DataTypes.STRING(10), allowNULL: false },
      pw: {
        type: DataTypes.STRING(20),
        allowNULL: false,
      },
    },
    {
      tableName: "user1",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return User;
};

module.exports = UserModel;
