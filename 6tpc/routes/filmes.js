var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/filmes', function(req, res, next) {
  axios.get('http://localhost:3004/filmes')
    .then(dados => {
        res.render('lista-filmes', { lista: dados.data });
    })
    .catch(erro => {
        res.render('error', {error: erro})
    })
})

router.get('/inserir', function(req, res) {
    res.render('form-filme')
})

//quando clicamos em enviar no formulario ele volta a pagina inicial
router.post('/', function(req, res) {
    axios.post('http://localhost:3004/filmes', req.body)
    .then(dados => {
        res.redirect('/')
    })
    .catch(erro => {
        res.render('error', {error: erro})
    })
})

module.exports = router;
