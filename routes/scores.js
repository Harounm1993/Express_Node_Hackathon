var express = require('express');
var router = express.Router();

const { getAllScores, addScore } = require ("../models/score");

// Get requests
router.get("/", async function (req, res){
  const score = await getAllScores();
  res.json({success: true, payload:score});
})


// Post requests

router.post("/", async function (req, res) {
  const name = req.body;
  const id = await addScore(name);
  console.log(id);
  res.json({ success: true, message: `Your score has been uploaded...${id}` });
  //res.send ('Hello');
});
module.exports = router;