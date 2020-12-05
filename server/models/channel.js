const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    imgUrl:  String,
})

const model = mongoose.model("channels",schema);

module.exports = model;