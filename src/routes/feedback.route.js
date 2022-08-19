const express = require("express");
const router = express.Router();

const { getFeedback, postFeedback } = require('../controllers/feedback.controller')

router.route('/feedback').get(getFeedback).post(postFeedback);

module.exports = router;