const models = require("../models");
const { Op } = require("sequelize");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

exports.post_signin = (req, res) => {
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true, data: result });
  });
};

exports.post_profile = (req, res) => {
  console.log(req.body);

  models.User.findOne({
    where: { userid: req.body.profile },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

exports.edit_profile = (req, res) => {
  console.log(req.body);
  const { userid, pw, name, id } = req.body;
  models.User.update({ userid, pw, name }, { where: { id } }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

exports.delete_profile = (req, res) => {
  const { id } = req.body;
  model.User.destroy({ where: { id } }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

//findall
exports.findall = (req, res) => {
  models.User.findAll({
    // attributes: ["name", "userid"],
    //Op.gt (초과), Op.gte(이상), OP.1t(미만),Op. ne(같지 않은)
    //Op.oe(또는)
    where: { id: { [Op.gte]: 4 } },
    order: [["id", "DESC"]],
    limit: 1,
    offset: 1,
  }).then((result) => {
    res.send("findAll");
  });
};
