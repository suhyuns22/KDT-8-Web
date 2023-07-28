// // const express = require("express");

// import express from "express";

// const app = express();
// const PORT = 8000;

// //뷰엔진
// app.set("view engine", "ejs");
// app.set("views", "./views");

// //정적인 파일 불러오기 (별로 좋지 못한 방법)
// app.use("public", express.static("./public"));

// app.get("/", (req, res) => {
//   //send() 클라이언트에 응답 데이터를 보낼 떄'
//   //   res.send("Hello express");
//   //   res.send({
//   //     result: true,
//   //     code: 1000,
//   //     message: "회원가입에 성공하셨습니다",
//   //     data: { name: "suhyun" },
//   //   });
//   //render() 뷰 엔진 렌더링
//   res.render("test", { data: "suhyun" });
// });

// //서버를 열어주는 역할 : listen
// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });

// console.log(express);
