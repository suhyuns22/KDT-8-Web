const commentsModel = require("../model/Model");

// exports.main = (req, res) => {
//     res.render('index');
// };

const main = (req, res) => {
  res.render("index");
};

const comments = (req, res) => {
  res.render("comments", { lists: commentsModel });
};

const comment = (req, res) => {
  console.log(req.params);
  //{index: '1'} 세미콜론 : 뒤에 붙은 변수가 key, 그 값이 value
  res.render("comment", { data: commentsModel[Number(req.params.index) - 1] });
};

module.exports = {
  main: main,
  comm: comments,
  comment,
};

// //모듈
// //방법1
// const test = () => {};
// module.exports = test;
// //방법2
// module.exports.text2 = "함수, 변수 등 모두 사용";
// exports.text2 = ""; //생략형
