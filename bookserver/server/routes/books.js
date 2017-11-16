var express = require('express');
var router = express.Router();
var csv = require('csvtojson');


/* GET home page. */
/* Read all */
router.get('/', function(req, res) {
  csv().fromFile('./books.csv')
  .on('json', (json) =>{
  })
  .on('end_parsed', (jArr) =>{
    res.json({status:200, books: jArr});
  })
  .on('error',(error) =>{
    res.send({status: 500});
  })
})

// Get authors
router.get('/authors', function (req, res) {
  var aArr = [];
  var reps = {};
  csv({
    includeColumns: [7]
  })
  .fromFile('./books.csv')
  .on('json', (jObj) => {
    if (aArr.indexOf(jObj.authors) < 0){
      aArr.push(jObj.authors);
      reps[jObj.authors] = 1
    }
    else if (reps.hasOwnProperty(jObj.authors)){
      reps[jObj.authors] += 1;
    }
  })
  .on('end', () => {
    res.json({status:200, authors: aArr, authorsRepeated: reps});
  })
  .on('error', (error) =>{
    res.send({status: 500});
  })
})


/* Read one */
router.get('/:id', function(req, res){
  csv().fromFile('./books.csv')
  .on('json', (jObj) =>{
    if (jObj.id === req.params.id){
      res.json({status: 200, book : jObj});
    }
  })
  .on('error',(error) =>{
    console.log('error');
    res.send({status: 500});
  })
})

module.exports = router;