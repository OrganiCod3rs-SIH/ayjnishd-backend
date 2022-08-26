const pool = require("../models/db");
const { v4: uuidv4 } = require("uuid");

const getCi = async (req, res) => {
  if (
    req.query.id === undefined ||
    req.params.id === "" ||
    req.params.id === null
  ) {
    try {
      const Ci = await pool.query(`SELECT * FROM ci_child`);
      res.json(Ci.rows);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(req.query.id);
    try {
      const { id } = req.query;
      console.log(id);
      const Ci = await pool.query(`SELECT * FROM ci_child where id = $1`, [id]);
      res.json(Ci.rows);
    } catch (err) {
      console.log(err);
    }
  }
};

const postCi = async (req, res) => {
  try {
    const { formData } = req.body;
    console.log(formData);
    const { name, dob, age, gender, state, email, degree, type } = formData;
    const newCi = await pool.query(
      `INSERT INTO ci_child (id, name, dob, age, gender, state, email, degree, type, status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [uuidv4(), name, dob, age, gender, state, email, degree, type, "pending"]
    );
    res.json(newCi.rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCi,
  postCi,
};
