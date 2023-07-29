const express = require("express");

const app = express();
const PORT = 8000;

//뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice2");
});

<a href="/ghi">도메인3</a>;
app.use("/public", express.static("./public"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
