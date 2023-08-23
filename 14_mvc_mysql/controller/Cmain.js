const model = require("../model/Model");

//GET
const main = (req, res) => {
  res.render("index");
};
//회원가입 페이지
const signup = (req, res) => {
  res.render("signup");
};
//로그인 페이지
const signin = (req, res) => {
  res.render("signin");
};

//////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
  model.db_signup(req.body, () => {
    res.json({ result: true });
  });
};

//로그인
const post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

const post_profile = async (req, res) => {
  try {
    const result = await User.post_profile(req.body);
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("/user/signin");
    }
  } catch (error) {
    console.log(error);
  }
};

const edit_profile = async (req, res) => {
  try {
    await User.edit_profile(req.body);
    res.status(200).send({ result: true });
  } catch (error) {
    console.log(error);
  }
};

//res.render : 뷰페이지를 렌더링 render(뷰페이지이름,데이터(선택)), 뷰는 node.js가 제공하는 템플릿
//res.send : 모든 타입 데이터 전송 (모든타입? 문자열, 배열, 객체 , 숫자 등)
//res.json : 객체타입 데이터 전송
//res.redirect : 페이지를 이동

module.exports = {
  main,
  signin,
  signup,
  post_signin,
  post_signup,
  post_profile,
  edit_profile,
};
