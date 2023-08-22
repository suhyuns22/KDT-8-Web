const express = require("express");
const app = express();
const PORT = 8000;

const userInfo = { id: "kdt8", pw: "1234" };

//body-parser
app.use(express.json());
//view engine
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//post실습
app.get("/axiosPost", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  //코드 실습
  const { username, password } = req.body;
  //userInfo의 사용자값 비교
  if (username === userInfo.id && password === userInfo.pw) {
    //res.json: application/json형태로 응답할 때 사용
    //json() 함수안에는 객체가 꼭 와야함
    res.json({ result: true, userInfo: { id: username, pw: password } });
  } else {
    res.json({ result: false });
  }

  // const data = req.body;
  // if (data.id === userInfo.id && data.pw === userInfo.pw) {
  //   res.send("success");
  // } else {
  //   res.send("false");
  // }
});

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
