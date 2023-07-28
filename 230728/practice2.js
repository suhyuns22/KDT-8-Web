const express = require("express");

const app = express();
const PORT = 8000;

//뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice2");
});

app.use("/public", express.static("./public"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
