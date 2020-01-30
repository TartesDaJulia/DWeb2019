var express = require('express');
var router = express.Router();

var File = require('../controllers/files')

/* GET home page. */
router.get('/', function(req, res) {
  File.list()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/id/:id', function(req, res, next) {
  File.consult(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/name/:name', function(req, res, next) {
  File.consultByName(req.params.name)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/date/:date', function(req, res, next) {
  File.consultByDate(req.params.date)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/uploader/:uploader', function(req, res, next) {
  File.consultByUploader(req.params.uploader)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/type/:type', function(req, res, next) {
  File.consultByType(req.params.type)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});


module.exports = router;
