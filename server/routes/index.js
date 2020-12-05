var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const channel = require('../models/channel')
const subChannel = require('../models/subChannel');
const threads = require('../models/threads');

mongoose.connect("mongodb://localhost:27017",{useNewUrlParser: true,useFindAndModify:false})
  .then(()=>console.log("connected"))
  .catch((e)=>console.log("errr",e));
  
router.get('/', function(req, res, next) {
  res.send("nice");
});

router.get('/channels', async (req,res)=>{
  const result = await channel.find({});
  res.send(result);
  res.end();
})

router.post('/channels', async (req,res)=>{
  const create = await channel.create({
    name: req.body.name,
    description: req.body.description,
    imgUrl: req.body.imgUrl
  })
  res.send(create);
  res.end();
})

router.get('/subChannel/:id', async (req,res)=>{ 
  const result = await subChannel.find({channel: req.params.id});
  res.send(result);
  res.end();
})
router.post('/subChannel/:id', async (req,res)=>{
  const create = await subChannel.create({
    channel: mongoose.Types.ObjectId(req.params.id),
    heading: req.body.heading,
  });
  res.send(create);
  res.end();
})

router.post('/threads/:id',async (req,res)=>{
  const create = await threads.create({
    heading: req.body.heading,
    message: req.body.messages,
    subChannel: mongoose.Types.ObjectId(req.params.id)
  })
  res.send(create);
  res.end();
})

router.get('/threads/:id', async (req,res)=>{
  const result = await threads.find({subChannel: req.params.id});
  res.send(result);
  res.end();  
})

module.exports = router;
