var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var axios = require('axios');
var fetch = require('node-fetch')
var logger = require('morgan');
var passport = require('passport')
var bcrypt = require('bcryptjs')

var sortByProperty = function (property) {
  return function (x, y) {
      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
  };
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rede Estudantes' });
});

router.post('/login', passport.authenticate('local', 
  { successRedirect: '/',
    successFlash: 'Utilizador autenticado com sucesso!',
    failureRedirect: '/login',
    failureFlash: 'Utilizador ou password inválido(s)...'
  })
)

function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}

router.get('/main', (req, res) => {
  Promise.all([
    get(`http://localhost:3001/users`),
    get(`http://localhost:3001/posts`)
  ]).then(([users, posts]) =>{
    users=JSON.stringify(users)
    posts=JSON.stringify(posts)
    var data = JSON.parse("[{\"users\": "+users+"},{\"posts\":"+posts+"}]")
    data[1].posts.sort(sortByProperty('datePosted'))
    res.render('main',{data})
  })
    .catch(err => res.render('error',{erro: err}))
})

router.get('/register', (req, res) => {
    res.render('register')
  })

router.post('/regi', function(req,res){
  var hash = bcrypt.hashSync(req.body.password, 10);
  axios.post('http://localhost:3001/users', {
     username: req.body.username,
     name: req.body.name,
    password: hash
  })
     .then(dados => res.redirect('/'))
     .catch(e => res.render('error', {error: e}))
 })

 function verificaAutenticacao(req,res,next){
  if(req.isAuthenticated()){
  //req.isAuthenticated() will return true if user is logged in
    next();
  } else{
    res.redirect("/");}
}

module.exports = router;
