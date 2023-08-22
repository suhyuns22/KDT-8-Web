const commentsModel = require("../model/Model");
const member = require("../model/Model");

const main = (req, res) => {
  res.render("index");
};

const memberView = (req, res) => {
  res.render("member", { lists: commentsModel });
};

const membersView = (req, res) => {
  console.log(req.params);
  res.render("members", { data: commentsModel[Number(req.params.index) - 1] });
};

const addMember = (req, res) => {
  const { name, gender, major } = req.body;

  const newMember = {
    id: member.length + 1,
    name: name,
    gender: gender,
    major: major,
  };

  member.push(newMember);

  res.redirect("/member");
};

const addMemberForm = (req, res) => {
  res.render("add-member-form");
};

module.exports = {
  main: main,
  memberView: memberView,
  membersView: membersView,
  addMember: addMember,
  addMemberForm: addMemberForm,
};
