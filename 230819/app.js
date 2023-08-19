const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//body - parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

//싱글파일 업로드
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload!!");
});

//array(): 여러 파일을 한번에 업로드 ver1
app.post("/upload/array", uploadDetail.array("userfiles"), function (req, res) {
  console.log(req.files);
  console.log(req.body);
  res.send("Upload multiple Each!!");
});

// ver2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload Multiple Each!!");
  }
);

//동적
app.post("/dynamic", uploadDetail.single("dynamic-file"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
