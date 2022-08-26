const pool = require("../models/db");

const changeStatus = async (req, res) => {
  try {
    const { data } = req.body;
    console.log(data);
    const { id, status } = data;
    const newCi = await pool.query(
      `UPDATE ci_child SET status=$1 WHERE id=$2 RETURNING *`,
      [status, id]
    );
    res.json(newCi.rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  changeStatus
};
