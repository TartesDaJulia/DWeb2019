var express = require('express');
var router = express.Router();
var Pubs = require('../controllers/pubs')


router.get('/pubs', function(req, res) {
  if(req.query.type)        // api/pubs?type=YYYY
  {
    if(req.query.year)      // api/pubs?type=YYYY&year=XXXX
    {
        Pubs.consultByTypeAndYear(req.query.type,req.query.year)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Pubs.consultByType(req.query.type)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
  }
  else
  if(req.query.autor){
    Pubs.consultAuthorsPubs(req.query.autor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }else{ //api/pubs
        Pubs.list()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/pubs/:id', function(req, res) {
    Pubs.consult(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/pubs', function(req, res,) {
  res.render('index', { title: 'Express' });
});

router.get('/types',function(req,res){
    Pubs.listTypes()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/autores',function(req,res){
    Pubs.listAuthors()
        .then(dados => {
            dados.sort()
            res.jsonp(dados)
        })
        .catch(erro => res.status(500).jsonp(erro))
})



module.exports = router;
