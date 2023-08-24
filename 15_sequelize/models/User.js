const { DataTypes, Sequelize } = require("sequelize");

const Model = (sequelize) => {
  return sequelize.define("user", {
    //컬럼정의
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, //NOT NULL
      primaryKey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING(20),
      allowNull: false, //NOT NULL
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false, //NOT NULL
    },
    pw: {
      type: DataTypes.STRING(255),
      allowNull: false, //NOT NULL},
    },
  });
};

module.exports = Model;
