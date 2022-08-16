const express = require("express");
const router = express.Router();

const { getKPIs, updateKPIs } = require('../controllers/kpi.controller')

router.route('/kpi').get(getKPIs).post(updateKPIs);

module.exports = router;