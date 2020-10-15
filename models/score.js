// functions 

const {query} = require("../db")

async function getAllScores() {
    const result = await query("SELECT * FROM scoreChecker;");
    return result.rows;
}

async function addScore(name) {
  const result = await query("INSERT INTO name(text) VALUES ($1) RETURNING id;", [name]);
  return result.rows.id;
}

module.exports = {
  getAllScores,
  addScore
}