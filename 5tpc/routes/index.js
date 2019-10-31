var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var myBD = __dirname + "/../data/alunos.json";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/alunos', function (req,res) {
  jsonfile.readFile(myBD, (erro,alunos ) => {
    if(!erro) {
      res.render('index', {lista:alunos})    }
    else {
      res.redirect('error', {erro:alunos})
    }
  })
})

router.get('/alunos/:idAluno', function (req,res) {
  var id= req.params.idAluno
  jsonfile.readFile(myBD, (erro,alunos ) => {
    if(!erro) {
      var aluno = alunos.filter ( c => c.identificador == id)
    }
    res.render('aluno', {lista:aluno})
  })
})


router.post('/alunos', function(req,res) {
  var registo = req.body
  registo["id"] = nanoid()          //adionionar campo ao objeto
  jsonfile.readFile(myBD, (erro, alunos)=>{
      if(!erro){
        alunos.push(registo)
          jsonfile.writeFile(myBD, alunos, erro => {
              if(erro) console.log(erro)
              else console.log('Registo gravado com sucesso.')
          })
      }
      res.render('index', {lista: alunos})
  })

})

router.delete('/compras/:idAluno', function(req, res) {
	var id = req.params.idAluno
	jsonfile.readFile(myBD, (erro, alunos)=>{
	  if(!erro){
		var index = alunos.findIndex(c => c.id == id)
		if(index > -1){
		  alunos.splice(index, 1)
		  jsonfile.writeFile(myBD, alunos, erro => {
			if(erro) console.log(erro)
			else console.log('Registo removido com sucesso.')
		  })
		}
	  }
	  res.render('index', {lista: alunos})
	})
})



module.exports = router;
