const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  //   res.send("Hello");
  res.render("practice2", { title: "실습02. POST로 정보받기" });
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.put("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
