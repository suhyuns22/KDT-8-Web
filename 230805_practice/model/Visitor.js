// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "1234",
  database: "kdt8",
});

exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("Visitor : ", rows);
    callback(rows);
  });
};
