const express = require('express');
const router = express.Router();
var Compositores = require('../controllers/compositores')


router.get('/compositores', function(req, res) {
    if(req.query.ano){ 
      if(req.query.per)
      {
        Compositores.consultarAnoePer(req.query.periodo, req.query.ano)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
      }
      else{
        Compositores.consultarPer(req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
      }
    }
    else if(req.query.ano!=null) {
      Compositores.consultarAno(req.query.ano)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else {
      Compositores.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    
})

router.get('/compositores/:id', function(req, res) {
    Compositores.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})


module.exports = router