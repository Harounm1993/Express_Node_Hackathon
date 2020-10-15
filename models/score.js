// functions 

const {query} = require("../db")

async function getAllScores() {
    const result = await query("SELECT * FROM scorechecker;");
    return result.rows;
}

async function addScore(name) {
  const result = await query("INSERT INTO scorechecker name (text) score (integer) VALUES ($1 $2) RETURNING id;", [name,score] );
  return result.rows.id;
}

module.exports = {
  getAllScores,
  addScore
}