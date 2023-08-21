const express = require("express");
const app = express();
const PORT = 8000;

//view engine
app.set("view engine", "ejs");
//views 라는 설정을 다른 폴더로 바꿀 때 쓰는 옵션
//views 라는 폴더를 기본으로 사용할 때는 입력 안해도 됨
app.set("views", "./views");

//body-parser
//req.body  즉, post 전송일 때 사용
app.use(express.urlencoded({ extended: true }));
//extended: 중첩된 객체표현을 허용할지 말지 정함
//application/x-www-form-urlencoded

app.use(express.json());
//application/json

//router

app.get("/getForm", (req, res) => {
  //get 방식은 request(req)에 query형태로 접근
  //result 페이지에 데이터 전송
  //req.query 구조 분해 할당 req.query.id,req.query.pw
  const { id, pw } = req.query;
  res.render("result", {
    title: "GET요청 결과 확인",
    userInfo: { id, pw },
    //key-value형태에서 key값과 value의 변수가 동일할 때는 value 생략 가능
  });
});

app.post("/postForm", (req, res) => {
  //post방식은 request(req)에 body형태로 접근
  //req.body 구조 분해 할당 req.body.id,req.body.pw
  const { id, pw } = req.body;
  //result 페이지에 데이터 전송
  res.render("result", { title: "POST요청 결과 확인", userInfo: { id, pw } });
});

//페이지를 지정할 때는 미들웨어 use를 사용
app.get("/", (req, res) => {
  //render: 페이지를 렌더링 render("페이지이름",데이터)
  res.render("index");
});
//use는 http 전송방식을 이해하지 못함
//같은 url로 get,post를 만들 수 있지만 use로는 접근이 불가
//예를들어 get 방식의 '/login'과 post '/login' 방식의 은 다른 페이지이지만 use는 동일한 페이지로 인식
//use는 404페이지 일 때 사용

app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
