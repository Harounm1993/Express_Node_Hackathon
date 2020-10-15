// functions 

const {query} = require("../db")

async function getAllScores() {
    const result = await query("SELECT * FROM scoreChecker;");
    return result.rows;
  }

  module.exports = {
    getAllScores
    
  };
  