var express = require('express');
var router = express.Router();
var axios = require('axios');


getUserData = () => { axios.get('http://localhost:3001/users');}

getPostData = () => { axios.get('http://localhost:3001/posts');}

getFileData = () => { axios.get('http://localhost:3001/files');}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
 /*axios.all([ getUserData(), getPostData()])
    .then(dados => {
      console.log(dados.data)
      res.render('main', {posts:dados.data})
    })
    .catch(e => res.render('erro',{erro: e}))*/

  var posts;
  var users;
  axios.get('http://localhost:3001/posts')
    .then(dados => posts=dados.data)
    .catch(e => res.render('erro',{erro: e}))
  axios.get('http://localhost:3001/users')
    .then(dados =>{
      users=dados.data
      res.render('main', {posts,users})
    })
    .catch(e => res.render('erro',{erro: e}))

  
});



module.exports = router;
