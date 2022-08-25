const express = require("express");
const router = express.Router();

const { getCi, postCi } = require("../controllers/Ci.controller.js");

router.route("/Ci").get(getCi).post(postCi);

module.exports = router;
