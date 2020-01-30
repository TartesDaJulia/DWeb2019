var express = require('express');
var router = express.Router();

var Post = require('../controllers/posts')

/* GET home page. */
router.get('/', function(req, res) {
  Post.list()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.post('/', function(req, res) {
  Post.insere()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/id/:id', function(req, res, next) {
  Post.consult(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/text/:text', function(req, res, next) {
  Post.consultWithText(req.params.text)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/poster/:poster', function(req, res, next) {
    Post.consultByUploader(req.params.poster)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).jsonp(e))
  });

router.get('/date/:date', function(req, res, next) {
  Post.consultByDate(req.params.date)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/files/:id', function(req, res, next) {
  Post.consultPostFiles(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/public', function(req,res) {
  Post.listPublic()
    .then(dados=> res.jsonp(dados))
    .catch(e=> res.status(500).jsonp(e))
})

module.exports = router;
