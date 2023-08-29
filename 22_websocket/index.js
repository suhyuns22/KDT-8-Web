const http = require("http");
const ws = require("ws");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

//웹소켓 서버 접속
const wss = new ws.Server({ server });

//브라우저(클라이언트)들을 담을 변수 선언
const sockets = [];

//socket 변수는 접속한 브라우저
wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다");
  //sockets 배열에 브라우저 추가
  sockets.push(socket);

  socket.on("message", (message) => {
    //웹소켓을 통해 클라이언트와 서간의 데이터를 주고받을 때는 일반적으로 문자열 또는 버퍼형태로 전달됨
    //msg: {name : 'any', messageL 'any'}
    const msg = JSON.parse(message);
    console.log(`클라이언트로부터 받은 메세지 : ${msg.message}`);
    //클라이언트로 응답 메세지 전송
    //socket.send(`서버메세지 : ${message}`);
    wss.clients.forEach((elem) => {
      elem.send(`${msg.user} : ${msg.message}`);
    });
  });

  //오류
  socket.on("error", (error) => {
    console.error("오류가 발생했습니다:", error);
  });

  //접속 종료
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료되었습니다.");
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
