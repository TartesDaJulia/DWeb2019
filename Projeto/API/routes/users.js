var express = require('express');
var router = express.Router();
var passport = require('passport')

var User = require('../controllers/users')

/* GET home page. */
router.get('/', function(req, res) {
  User.list()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/id/:id', function(req, res, next) {
  User.consult(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/username/:username',passport.authenticate('jwt', {session: false}), function(req, res, next) {
  User.consultByUsername(req.params.username)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/name/:name',passport.authenticate('jwt', {session: false}), function(req, res, next) {
  User.consultByName(req.params.name)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/DoB/:DoB', function(req, res, next) {
  User.consultByDateOfBirth(req.params.DoB)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/mail/:mail',passport.authenticate('jwt', {session: false}), function(req, res, next) {
  User.consultByMail(req.params.mail)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/course/:course', function(req, res, next) {
  User.consultByCourse(req.params.course)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.post('/update', function(req,res,next) {
  User.update(req.body)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
})

router.post('/', function(req, res, next) {
  User.insert(req.body)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

module.exports = router;
