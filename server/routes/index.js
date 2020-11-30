var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("nice");
});

router.get('/channels', (req,res)=>{

})

router.get('/subChannels/:id', (req,res)=>{

})

router.post('/threads',(req,res)=>{
  
})

router.get('/threads/:id',(req,res)=>{

})

router.delete('threads/:id',(req,res)=>{
  
})

module.exports = router;
