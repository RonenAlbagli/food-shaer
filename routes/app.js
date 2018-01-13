var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/live', (req,res,next)=>{
  console.log('in live server');
})

router.get('/recipes',(req,res,next)=>{

})

router.get('/users',(req,res,next)=>{
  
  })

module.exports = router;
