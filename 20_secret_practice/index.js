const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

//ejs
app.set("view engine", "ejs");
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
const userRouter = require("./routes/user");
app.use("/", userRouter);

//404
app.use("*", (req, res) => {
  res.render("404");
});

//server open
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

// const crypto = require("crypto");
// //functions
// const createHashedPassword = (password) => {
//   //createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
//   return crypto.createHash("sha512").update(password).digest("base64");
// };

// const salt = crypto.randomBytes(16).toString("base64"); //솔트생성
// const interations = 100; //반복 횟수
// const keylen = 64; //생성할 키의 길이
// const digest = "sha512"; //해시 알고리즘

// //단방향

// //암호 생성
// const createPbkdf = (password) => {
//   //pbkdf2함수 (비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)으로 생성되고 반환되는 값은 Buffer 값
//   const hash = crypto.pbkdf2Sync(password, salt, interations, keylen, digest);
//   //console.log(hash);
//   return hash.toString("base64");
// };
