const pool = require('../models/db')

const getKPIs = async (req, res) => {
    try {
        const KPIs = await pool.query(`SELECT registered, professionals, surgeries, hospitals FROM kpi`)
        res.json(KPIs.rows);
    }
    catch (err) {
        console.log(err);
    }
}

const updateKPIs = async (req, res) => {
    try {
        const { kpi } = req.body;
        console.log(kpi);
        const newKpi = await pool.query(`UPDATE kpi SET registered=$1, professionals=$2, surgeries=$3, hospitals=$4 where id=1 RETURNING *`, [kpi.registered, kpi.professionals, kpi.surgeries, kpi.hospitals])
        res.json(newKpi.rows);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getKPIs,
    updateKPIs
}