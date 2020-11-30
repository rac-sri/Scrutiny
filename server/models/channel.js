const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    desciption:{
        type:String,
        required: true
    },
    imgUrl:  String,
    subChannels : [{
        type: mongoose.Types.ObjectId,
        ref: "subChannels"
    }]
})

const model = mongoose.model("channels",schema);

module.exports = model;