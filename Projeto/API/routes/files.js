var express = require('express');
var router = express.Router();
var Ficheiro = require('../models/file')
var File = require('../controllers/files')

const fs = require('fs')
/* GET home page. */
router.get('/', function(req, res) {
  File.list()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/id/:id', function(req, res, next) {
  File.consult(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/name/:name', function(req, res, next) {
  File.consultByName(req.params.name)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/date/:date', function(req, res, next) {
  File.consultByDate(req.params.date)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/uploader/:uploader', function(req, res, next) {
  File.consultByUploader(req.params.uploader)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.get('/type/:type', function(req, res, next) {
  File.consultByType(req.params.type)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).jsonp(e))
});

router.post('/',function(req,res,next) {
  var listaErros = []
  console.log(req.body)
    for(let i=0; i < req.body.length; i++){
        let oldPath = __dirname + '/../../ISN/' + req.body[i].path
        let newPath = __dirname + '/../public/ficheiros/' + req.body[i].originalname
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err
        })

        let data = new Date()
        let novoFicheiro = new Ficheiro(
            { 
                name: req.body[i].filename,
                description: req.body[i].originalname,
                path: newPath, 
                mimetype: req.body[i].mimetype, 
                size: req.body[i].size,
                dateUploaded: data.toISOString(),
                uploadedBy: req.body[i].uploadedBy,
                idDate:req.body[i].idDate
            })
        File.insert(novoFicheiro)
            .then(dados => res.jsonp(dados))
            .catch(e => res.status(500).jsonp(e))
        //novoFicheiro.save(function (err, ficheiro) {
        //    if (err) console.log(listaErros.push(err))
        //})
    }
})


module.exports = router;
