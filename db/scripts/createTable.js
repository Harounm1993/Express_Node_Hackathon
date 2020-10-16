// import query
const { query } = require("../index");
// run query to make table
const sqlStatement = 
`CREATE TABLE IF NOT EXISTS scoretracker (
    id SERIAL PRIMARY KEY,
    name TEXT,     
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    score INTEGER
)`;

async function createTable() {
  const result = await query(sqlStatement);
  console.log(result);
}

createTable();