// const age = require("./module.js");
// console.log(age);

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  //   response.writeHead(200);
  //   response.write("<h1>Hellow World</h1>");
  //   response.end("<p>END</p>");

  //파일전송
  try {
    const data = fs.readFileSync("./index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
    response.writeHead(404);
    response.end(error.message);
  }
});

server.listen(8000, function () {
  console.log(`localhost:8000포트 실행`);
});
