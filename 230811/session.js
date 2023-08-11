const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

//세션
//옵션객체
//hhttpOnly: 값을 true 로 하면 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 강제
//secure:값을 true 로 하면 https에서만 세션을 주고받음
//secret: 안전하게 쿠키를 전송하기 위해 쿠키 서명 값(세션을 발급할 ㄱ때 사용되는 키)
//resave : 세션에 수정사항이 생기지 않더라도 매 요청마다(req) 세션을 다시 저장할 것인지
//saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정

app.use(
  session({
    secret: "mySessionKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  req.session.name = "홍길동";
  res.send("세션 설정 완료");
});

app.get("/name", (req, res) => {
  res.send(req.session.name);
});

app.get("/distroy", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log("ddd");
});