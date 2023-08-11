const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(cookieParser("1234"));

const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000,
  signed: true,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "myValue", cookieConfig);
  res.send("set cookie");
});

app.get("/getCookie", (req, res) => {
  res.send(req.signedCookies);
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie");
  res.send("clearCookie");
});

// 서버 시작 시 모달 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
