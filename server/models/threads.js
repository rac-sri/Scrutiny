const mongoose = require('mongoose');

const schema = mongoose.Schema({
    heading:{type:String},
    message: String,
    subChannel:{
        type:mongoose.Types.ObjectId
    }
})

const model = mongoose.model("threads",schema);
module.exports  = model;