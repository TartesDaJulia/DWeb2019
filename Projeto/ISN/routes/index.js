var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
  axios.get('http://localhost:3001/posts')
    .then(dados => res.render('main', {posts:dados.data}))
    .catch(e => res.render('erro',{erro: e}))
});

module.exports = router;
