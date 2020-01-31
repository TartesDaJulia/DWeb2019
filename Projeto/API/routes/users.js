var express = require('express');
var router = express.Router();
var passport = require('passport')

var User = require('../controllers/users')

const fs = require('fs');
var lineReader = require('line-reader');
var bcrypt = require('bcryptjs')

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


router.post('/updateProfile', function(req,res,next) {
  User.updateProfile(req.body)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
})


router.post('/', function(req, res, next) {
  User.insert(req.body)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/delete/:id',function(req,res,next) {
  console.log("----------------vou apagar----------------------")
  User.delete(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
})

router.get('/massRegister', function(req, res, next) {
  console.log("Going to insert many users!")
  var path=__dirname+'/../parsedFile/registers.json'

  var fromFile

  sleep(1000).then(()=>
  fs.readFile(path,'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    } 
    console.log(data)
    fromFile=JSON.parse(data)
    fs.unlink(path, function(err,data) {
      if (err) {
        console.error(err)
        return
      }
      console.log("unlinked")
      console.log(data)
    })
    
    User.insertMore(fromFile.registers)
    .then(dados => {
      res.jsonp(dados)

    })
    .catch(e => res.status(500).jsonp(e)) 
  })
  )
   
   
});

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = router;
