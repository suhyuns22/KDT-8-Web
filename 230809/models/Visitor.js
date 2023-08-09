//visitor 에 대한 테이블 정의
const Visitor = function (sequelize, DataTypes) {
  //sequeliz는 models/index.js 에 있는 sequelize
  //DataType는  models/index.js 에 있는 Sequeliz
  const model = sequelize.define(
    "visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNULL: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNULL: false,
      },
      comment: { type: DataTypes.TEXT("medium") },
    },
    {
      tablename: "visitor",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};
module.exports = Visitor;
