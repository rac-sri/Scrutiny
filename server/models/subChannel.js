const mongoose = require('mongoose');

const schema = mongoose.Schema({
    heading:{type:String},
    threads:[{
        type:mongoose.Types.ObjectId,
        ref:"threads"
    }],
    channel:{
        type:mongoose.Types.ObjectId
    }
})

const model = mongoose.model("subChannels",schema);
module.export  = model;