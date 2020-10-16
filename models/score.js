// functions 

const {query} = require("../db")

async function getAllScores() {
    const result = await query("SELECT * FROM scoretracker;");
    return result.rows;
}



async function addScore(scoreObj) {
  const result = await query("INSERT INTO scoretracker (name, date, score) VALUES ($1, $2, $3) RETURNING id;", [scoreObj.name, scoreObj.date, scoreObj.score] );
  return result.rows[0].id;

}

module.exports = {
  getAllScores,
  addScore
}