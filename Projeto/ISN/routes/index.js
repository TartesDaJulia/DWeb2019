var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var axios = require('axios');
var fetch = require('node-fetch')
var logger = require('morgan');
var flash = require('connect-flash')

var passport = require('passport')
var bcrypt = require('bcryptjs')

const fs = require('fs')

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var sortByProperty = function (property) {
  return function (x, y) {
      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
  };
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rede Estudantes' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Rede Estudantes' });
});

router.post('/login', passport.authenticate('local', 
  { successRedirect: '/main',
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

router.get('/main',verificaAutenticacao, (req, res) => {
  var user = JSON.stringify(req.user)
  Promise.all([
    get(`http://localhost:3001/users`),
    get(`http://localhost:3001/posts`)
  ]).then(([users, posts]) =>{
    users=JSON.stringify(users)
    posts=JSON.stringify(posts)
    var data = JSON.parse("[{\"users\":"+users+"},{\"posts\":"+posts+"},{\"loggedUser\":"+user+"}]")
    console.log(JSON.stringify(data,null,2))
    //var data = JSON.parse("[{\"users\": "+users+"},{\"posts\":"+posts+"},{\"loggedUser\":"+req.user+"}]")
    data[1].posts.sort(sortByProperty('datePosted'))
    res.render('main',{data})
  })
    .catch(err => res.render('error',{erro: err}))
})

router.get('/register', (req, res) => {
    res.render('register')
  })

router.post('/regi', upload.single('avatar'), function(req,res){
  //treat file upload
  let oldPath = __dirname + '/../' + req.file.path
  let newPath = __dirname + '/../public/avatar/' + req.file.originalname

  fs.rename(oldPath,newPath,function(err) {
    if(err) throw err
  })

  var hash = bcrypt.hashSync(req.body.password, 10);
  axios.post('http://localhost:3001/users', {
     username: req.body.username,
     name: req.body.name,
     password: hash,
     mail: req.body.mail,
     dateOfBirth: req.body.dateOfBirth,
     fotoPath:req.file.originalname,
     course:req.body.course,
     type:req.body.type
  })
     .then(dados => res.redirect('/'))
     .catch(e => res.render('error', {error: e}))
 })

 router.get('/logout', verificaAutenticacao, function(req,res){
  req.logout()
  res.redirect('/')
})


 function verificaAutenticacao(req,res,next){
  if(req.isAuthenticated()){
  //req.isAuthenticated() will return true if user is logged in
    next();
  } else{
    res.redirect("/");}
}

module.exports = router;
