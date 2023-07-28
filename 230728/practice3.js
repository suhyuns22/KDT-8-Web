const express = require("express");

const app = express();
const PORT = 8000;

//뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice3", { data: 2 });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
