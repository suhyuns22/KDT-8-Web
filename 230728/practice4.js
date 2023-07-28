import express from "express";

const app = express();
const PORT = 8000;

//뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

//정적인 파일 불러오기 (별로 좋지 못한 방법)
app.use("public", express.static("./public"));

app.get("/", (req, res) => {
  res.render("practice4");
});

//서버를 열어주는 역할 : listen
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

console.log(express);
