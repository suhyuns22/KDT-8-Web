const mysql = require("mysql");

//mysql 연결
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "kdt",
  password: "12345678!",
  database: "kdt8",
  port: 3306,
});

conn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connect");
});

exports.post_signup = (data, callback) => {
  const query = `INSERT INTO user1 (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signup", rows);
    callback(rows);
  });
};

exports.post_signin = (data, callback) => {
  const query = `SELECT * FROM user1 WHERE userid='${data.userid}' AND pw='${data.pw}' `;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signin", rows);
    callback(rows);
  });
};

exports.post_profile = (data, callback) => {
  const query = `SELECT * FROM user1 WHERE userid='${data.profile}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_profile", rows);
    callback(rows);
  });
};

exports.edit_profile = (data, callback) => {
  const query = `UPDATE user1 SET name='${data.name}',pw='${data.pw}'  WHERE userid='${data.userid}'`;
  conn.query(query, (err, rows) => {
    callback();
  });
};

exports.delete_profile = (id, callback) => {
  const query = `DELETE FROM user1 WHERE id=${id}`;
  conn.query(query, (err, rows) => {
    callback();
  });
};
