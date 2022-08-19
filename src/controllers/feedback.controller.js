const pool = require('../models/db')

const getFeedback = async (req, res) => {
    try {
        const feedbacks = await pool.query(`SELECT * FROM feedback`)
        res.json(feedbacks.rows);
    }
    catch (err) {
        console.log(err);
    }
}

const postFeedback = async (req, res) => {
    try {
        const { formData } = req.body;
        console.log(formData);
        const { name, email, contact_no, case_no, implantee_name, feedback, improvement, suggestion } = formData
        const newFeedback = await pool.query(`INSERT INTO feedback (name, email, contact_no, case_no, implantee_name, feedback, improvement, suggestion) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [name, email, contact_no, case_no, implantee_name, feedback, improvement, suggestion]);
        res.json(newFeedback.rows);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getFeedback,
    postFeedback
}