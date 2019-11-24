const express = require('express');
const router = express.Router();
const fs = require('fs')
var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiro')

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET da lista de ficheiros */
router.get('/ficheiros', function(req, res) {
    Ficheiros.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

router.post('/ficheiros', upload.array('ficheiro'), function(req,res){

    for(var i=0;i<req.files.lenght;i++)
    {
        var oldPath = __dirname + '/../' + req.file[i].path
        var newPath = __dirname + '/../data/' + req.file[i].originalname

        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err
        })

        var data = new Date()

        var novoFicheiro = new Ficheiro(
            { 
                data: data.toISOString(),
                desc: req.body[i].desc,
                name: req.file[i].originalname,
                path: newPath, 
                mimetype: req.file[i].mimetype, 
                size: req.file[i].size
            });
        
        novoFicheiro.save(function (err, ficheiro) {
            if (err) res.status(500).jsonp(err)
            else
            res.jsonp({mensagem: ficheiro.path + ' foi gravado com sucesso.'})
        })
    }    
})

module.exports = router;