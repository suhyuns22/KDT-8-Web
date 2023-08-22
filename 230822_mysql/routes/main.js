const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// router
router.get("/", controller.main);
router.get("/member", controller.memberView);
router.get("/members/:index", controller.membersView);
router.get("/add-member", controller.addMemberForm);
router.post("/add-member", controller.addMember);

module.exports = router;
