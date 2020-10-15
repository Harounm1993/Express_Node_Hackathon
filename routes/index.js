var express = require('express');
var router = express.Router();
var app  = express()
const { getAllScores, addScore } = require ("../models/score");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// Get requests
router.get("/", async function (req, res){
  const score = await getAllScores();
  res.json({success: true, payload:score});
})


// Post requests

router.post("/", async function (req, res) {
  // const name = req.body;
  // const id = await addScore(name);
  //res.json({ success: true, message: `Your score has been uploaded...${id}` });
  //res.send ('Hello');
});
