const express = require("express");
const router = express.Router();

const { changeStatus } = require("../controllers/changeStatus.controller.js");

router.route("/changeStatus").post(changeStatus);

module.exports = router;
