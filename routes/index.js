var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Suggestions',function(req,res){
  res.render('Suggestions');
})
router.get('/mypage',function(req,res){
  res.render('mypage');
})
router.get('/UploadAsk',function(req,res){
  res.render('AskForm');
})
router.get('/indexENG',function(req,res){
  res.render('indexENG');
})
router.get('/SuggestionsENG',function(req,res){
  res.render('SuggestionsENG');
});
router.get('/CommingSoon',function(req,res){
	res.render('CommingSoon');
});
router.get('/test',function(req,res){
    res.render('test');
});
module.exports = router;
