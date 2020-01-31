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
router.get('/',verificaAutenticacao2, function(req, res, next) {
  console.log("index")
  Promise.all([
    get(`http://localhost:3001/users`),
    get(`http://localhost:3001/posts/public`),
    get(`http://localhost:3001/events/public`)
  ]).then(([users, posts, events]) =>{
    users=JSON.stringify(users)
    posts=JSON.stringify(posts)
    events=JSON.stringify(events)
    if(events!="[]" && posts!="[]") 
    {

      var data = JSON.parse("[{\"users\":"+users+"},{\"posts\":"+posts+"},{\"events\":"+events+"}]")
      data[1].posts.sort(sortByProperty('datePosted'))
      data[2].events.sort(sortByProperty('date'))
      res.render("index", {data:data})
    }
    else if(posts != "[]"){
      var data = JSON.parse("[{\"users\":"+users+"},{\"posts\":"+posts+"}]")

      data[1].posts.sort(sortByProperty('datePosted'))
    }
    else {
      res.render('index')
    }
    res.render("index", {data})
  })
    .catch(err => res.render('error',{erro: err}))
});	

router.get('/login',verificaAutenticacao2, function(req, res, next) {
  console.log("index")
  Promise.all([
    get(`http://localhost:3001/users`),
    get(`http://localhost:3001/posts/public`),
    get(`http://localhost:3001/events/public`)
  ]).then(([users, posts, events]) =>{
    users=JSON.stringify(users)
    posts=JSON.stringify(posts)
    events=JSON.stringify(events)
    if(events!="[]" && posts!="[]") 
    {
      var data = JSON.parse("[{\"users\":"+users+"},{\"posts\":"+posts+"},{\"events\":"+events+"}]")
      data[1].posts.sort(sortByProperty('datePosted'))
      data[2].events.sort(sortByProperty('date'))
      res.render("index", {data:data})
    }
    else if(posts != "[]"){
      var data = JSON.parse("[{\"users\":"+users+"},{\"posts\":"+posts+"}]")
      data[1].posts.sort(sortByProperty('datePosted'))
    }
    else {
      res.render('index')
    }
    res.render("index", {data})
  })
    .catch(err => res.render('error',{erro: err}))
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
  console.log(JSON.stringify(req.user.type))
  console.log(JSON.stringify(req.user.type) == "\"admin\"")
  if(JSON.stringify(req.user.type) == "\"admin\"")
  {
    axios.get("http://localhost:3001/users")
    .then(dados => res.render('dashboard', {dados:dados.data}))
    .catch(e => res.render('error', {error: e}))
  }
  else{
    Promise.all([
      get(`http://localhost:3001/users`),
      get(`http://localhost:3001/posts`),
      get(`http://localhost:3001/events`)
    ]).then(([users, posts,events]) =>{
      users=JSON.stringify(users)
      posts=JSON.stringify(posts)
      events=JSON.stringify(events)
      var data = JSON.parse("[{\"users\":"+users+"},{\"posts\":"+posts+"},{\"events\":"+events+"},{\"loggedUser\":"+user+"}]")
      data[1].posts.sort(sortByProperty('datePosted'))
      res.render('main',{data})
    })
      .catch(err => res.render('error',{erro: err}))
  }
})

router.get('/eventos',verificaAutenticacao, (req, res) => {
  var user = JSON.stringify(req.user)
  console.log(JSON.stringify(req.user.type))
  console.log(JSON.stringify(req.user.type) == "\"admin\"")
  if(JSON.stringify(req.user.type) == "\"admin\"")
  {
    axios.get("http://localhost:3001/users")
    .then(dados => res.render('dashboard', {dados:dados.data}))
    .catch(e => res.render('error', {error: e}))
  }
  else{
    Promise.all([
      get(`http://localhost:3001/users`),
      get(`http://localhost:3001/events`)
    ]).then(([users, posts]) =>{
      users=JSON.stringify(users)
      posts=JSON.stringify(posts)
      var data = JSON.parse("[{\"users\":"+users+"},{\"posts\":"+posts+"},{\"loggedUser\":"+user+"}]")
      data[1].posts.sort(sortByProperty('datePosted'))
      res.render('evento',{data})
    })
      .catch(err => res.render('error',{erro: err}))
  }
})

router.get('/register', (req, res) => {
    res.render('register')
  })

  router.get('/eventos', (req, res) => {
    res.render('evento')
  })

router.get('/dashboard',verificaAutenticacao, (req,res) =>{
  if(req.user.type == "admin")
  {
    axios.get("http://localhost:3001/users")
    .then(dados => res.render('dashboard', {dados:dados.data}))
    .catch(e => res.render('error', {error: e}))
  }
  else {
    res.redirect("login")
  }
})

router.get('/details/:id',verificaAutenticacao,(req,res) => {
  if(req.user.type == "admin")
  {
    axios.get("http://localhost:3001/users/id/"+req.params.id)
        .then(dados => res.render('details', {user:dados.data}))  
        .catch(e => res.render('error', {error:e}))
  }
})

router.get('/profile/:id',verificaAutenticacao,(req,res) => {
  axios.get("http://localhost:3001/users/id/"+req.params.id)
      .then(dados => res.render('profile', {user:dados.data}))  
      .catch(e => res.render('error', {error:e}))

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
     username:    req.body.username,
     name:        req.body.name,
     password:    hash,
     mail:        req.body.mail,
     dateOfBirth: req.body.dateOfBirth,
     fotoPath:    req.file.originalname,
     course:      req.body.course,
     type:        req.body.type
  })
     .then(dados => res.redirect('/'))
     .catch(e => res.render('error', {error: e}))
 })

 router.get('/logout', verificaAutenticacao, function(req,res){
  req.logout();
  passport.user = null;  // Without this I never get logged out, even though session is deleted.
  if (req.session) {
      req.session.destroy(function (err) {
          if (err) {
              console.log(err)
          } else {
              res.redirect('/');
          }
      });
  }
})


router.post('/update',verificaAutenticacao, (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, 10);
  var dados = '{"id": "'+req.body._id+'","username":"'+req.body.username+'", "password" : "'+ hash +'", "type" : "'+req.body.type+'", "course":"'+req.body.course+'"}'
  data=JSON.parse(dados)
  axios.post("http://localhost:3001/users/update",data)
    .then(res.redirect('/'))
    .catch(e => res.render('error', {error:e}))
})


router.post('/updateProfile',verificaAutenticacao, (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, 10);
  var dados = '{"id": "'+req.body._id+'","name":"'+req.body.name+'","username":"'+req.body.username+'", "password" : "'+ hash +'","mail":"'+req.body.mail+'","dateOfBirth":"'+req.body.dateOfBirth+'", "type" : "'+req.body.type+'", "course":"'+req.body.course+'"}'
  data=JSON.parse(dados)
  axios.post("http://localhost:3001/users/updateProfile",data)
    .then(res.redirect('/'))
    .catch(e => res.render('error', {error:e}))
})

router.post('/massRegister', upload.single('registers'),(req,res) => {

  let oldPath = __dirname + '/../' + req.file.path
  let newPath = __dirname + '/../../API/fileToParse/registers.txt' 


  fs.rename(oldPath,newPath,function(err) {
    if(err) throw err
  })

  axios.get("http://localhost:3001/users/massRegister")
    .then(() => {
      sleep(1000).then(()=> res.redirect('/'))
    })
    .catch(e => res.render('error', {error:e}))
})


router.get('/delete/:id',verificaAutenticacao,(req,res) => {
  if(req.user.type == "admin")
  {
    axios.get("http://localhost:3001/users/delete/"+req.params.id)
      .then(res.redirect('/'))  
      .catch(e => res.render('error', {error:e}))
  }
})

function verificaAutenticacao(req,res,next){
  console.log("Hello")
  if(req.isAuthenticated()){
  //req.isAuthenticated() will return true if user is logged in
    next();
  } else{
    res.redirect("/");}
}

function verificaAutenticacao2(req,res,next){
  //if user is authenticated then send him to /main, else just show public posts...
  if(req.isAuthenticated()){
  //req.isAuthenticated() will return true if user is logged in
    res.redirect("main");
  } else{
    next();
  }
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = router;