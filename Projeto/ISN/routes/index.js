var express = require('express');
var router = express.Router();
var axios = require('axios');
var fetch = require('node-fetch')

getUserData = () => { axios.get('http://localhost:3001/users');}

getPostData = () => { axios.get('http://localhost:3001/posts');}

getFileData = () => { axios.get('http://localhost:3001/files');}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}

router.get('/main', (req, res) => {
  Promise.all([
    get(`http://localhost:3001/users`),
    get(`http://localhost:3001/posts`)
  ]).then(([users, posts]) =>{
    console.log(users)
    console.log(posts)
    res.render('main',{users,posts})
  })
    .catch(err => res.render('error',{erro: err}))
})

module.exports = router;
