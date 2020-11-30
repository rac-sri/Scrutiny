const mongoose = require('mongoose');

const schema = mongoose.Schema({
    heading:{type:String},
    messages:[String],
    subChannel:{
        type:mongoose.Types.ObjectId
    }
})

const model = mongoose.model("threads",schema);
module.export  = model;