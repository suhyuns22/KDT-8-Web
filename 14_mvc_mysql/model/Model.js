const mysql = require("mysql");

//mysql연결
//createConnection: 단일 연결
//요청할 때마다 새로운 연결 생성, 적은 수의 동시연결이나 단순한 데이터 베이스 커퀴리일 때 사용

// const conn = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "kdt",
//   password: "12345678!",
//   database: "kdt8",
//   port: 3306,
// });

//creatpool
//연결 풀을 생성, 풀은 미리 정의된 수의 연결을 생성하고 관리 요청이 들어오면 연결 풀에서 사용 가능한 연결을 제공. 작업완료 후 해단 연결 반환
//연결이 필요하지 않을 경우 자동으로 반환. 풀의 연결 수를 제한하고 괸리를 최적화. 다중 연결 서비스 적합
cost = conn = mysql.createPool({
  host: "127.0.0.1",
  user: "kdt",
  password: "12345678!",
  database: "kdt8",
  port: 3306,
  connectionLimit: 30, //최대 연결 수 (기본 : 10)
});

//문자열 보간방법 : `INSERT INTO user (userid,pw,name) VALUES('${data.userid}','${data.pw}','${data.name}')`
//단점 : sql 인젝션 공격 취약, 문자열에 특수문자가 포함될 경우 오류 발생
//보완 ->Prepared Statement
//INSERT INTO user (useriid,pw,name)VALUES(?,?,?)

//회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
  //문자열 보간 방법
  // const query = `INSERT INTO user (userid,pw,name) VALUES('${data.userid}','${data.pw}','${data.name}')`;
  // conn.query(query, (err, rows) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("db_signup", rows);
  //   cb();
  // });
  //Prepared Statement 방법
  const query = "INSERT INTO user (userid,pw,name) VALUES (?,?,?)";
  conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signup", rows);
    cb();
  });
};

const db_signin = (data, cb) => {
  // const query = `SELECT * FROM user WHERE userid = "${data.userid}" AND "pw = ${data.pw}"`;
  // conn.query(query, (err, rows) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("db_signin", rows);
  //   cb(rows);
  // });

  const query = "SELECT * FROM user WHERE userid = ? AND pw =?";
  conn.query(query, [data.userid, data.pw], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signin", rows);
    cb(rows);
  });
};

const post_profile = async (data) => {
  try {
    const query = "SELECT * FROM user1 WHERE userid = ?";
    const [rows] = await conn.query(query, [data.profile]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const edit_profile = async (data) => {
  try {
    const query = "UPDATE user1 SET userid= ?, pw = ?, name = ? WHERE id = ?";
    const [rows] = await conn.query(query, [
      data.userid,
      data.pw,
      data.name,
      data.id,
    ]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  db_signup,
  db_signin,
  post_profile,
  edit_profile,
};
