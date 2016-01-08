var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Suggestions',function(req,res){
  res.render('Suggestions');
})

router.get('/UploadAsk',function(req,res){
  res.render('AskForm');
})
router.get('/indexENG',function(req,res){
  res.render('indexENG');
})
module.exports = router;
