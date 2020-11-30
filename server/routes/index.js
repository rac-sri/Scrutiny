var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const channel = require('../models/channel')
const subChannel = require('../models/subChannel');
const threads = require('../models/threads');

mongoose.connect("mongodb:localhost:12707",{useNewUrlParser: true,useFindAndModify:false})
  .then(()=>console.log("connected"))
  .catch(()=>console.log("errr",e));
  
router.get('/', function(req, res, next) {
  res.send("nice");
});

router.get('/channels', async (req,res)=>{
  const result = await channel.find({});
  res.send(result);
  res.end();
})

router.get('/subChannels/:id', async (req,res)=>{ 
  const result = await subChannel.find({channel: req.params.id});
  res.send(result);
  res.end();
})

router.post('/threads',(req,res)=>{
  
})

router.get('/threads/:id', async (req,res)=>{
  const result = await threads.find({subChannel: req.params.id});
  res.send(result);
  res.end();
})

router.delete('threads/:id',(req,res)=>{

})

module.exports = router;
