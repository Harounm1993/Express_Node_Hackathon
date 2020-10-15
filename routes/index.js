var express = require('express');
var router = express.Router();
 var app  = express()

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