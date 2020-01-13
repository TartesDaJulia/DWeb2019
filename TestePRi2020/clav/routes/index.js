var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
const apiKey ="?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ"
const clav= "http://clav-api.dglab.gov.pt/api/"

router.get('/', function(req, res, next) {
  var request= clav+"tipologias"+apiKey
  axios.get(request)
    .then(dados => {
      console.log(request)
      res.render('index', {tipologias:dados.data})})
    .catch(e => {
      res.render('erro')})
});




router.get('/tipo/:id', function(req, res, next){
  const requestOne = axios.get(clav+"tipologias/"+req.params.id+apiKey)
  const requestTwo = axios.get(clav+"tipologias/"+req.params.id+"/elementos"+apiKey)
  const requestThree = axios.get(clav+"tipologias/"+req.params.id+"/intervencao/dono"+apiKey)
  const requestFour = axios.get(clav+"tipologias/"+req.params.id+"/intervencao/participante"+apiKey)
  axios.all([requestOne, requestTwo, requestThree, requestFour])
    .then(axios.spread((response1,response2,response3,response4) => {
    var base=response1.data
    var entidade=response2.data
    var dona=response3.data
    var participante=response4.data
    res.render('tipo',{base:base},{entidade:entidade},{dona:dona},{participante:participante})
      
    
  })).catch(errors => {
    // react on errors.
    res.render('erro')
  })
})



module.exports = router;
