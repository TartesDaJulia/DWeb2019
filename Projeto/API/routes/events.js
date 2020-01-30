var express = require('express');
var router = express.Router();

var Event = require('../controllers/events')

/* GET home page. */
router.get('/', function(req, res) {
  Event.list()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/id/:id', function(req, res, next) {
  Event.consult(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});


router.get('/poster/:poster', function(req, res, next) {
    Event.consultByUploader(req.params.poster)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).jsonp(e))
  });

  
router.get('/title/:title', function(req, res, next) {
  Event.consult(req.params.title)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/date/:date', function(req, res, next) {
  Event.consultByDate(req.params.date)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/files/:id', function(req, res, next) {
    Event.consultEventFiles(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).jsonp(e))
});

router.get('/location/:location', function(req, res, next) {
  Event.consultByLocation(req.params.location)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/type/:type', function(req, res, next) {
  Event.listByType(req.params.type)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});



router.get('/audience/:audience', function(req, res, next) {
  Event.listByAudience(req.params.audience)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});




router.get('/public', function(req,res) {
  Event.listPublic()
    .then(dados=> res.jsonp(dados))
    .catch(e=> res.status(500).jsonp(e))
})

module.exports = router;
