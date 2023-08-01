const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice");
});

app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

//서버오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
