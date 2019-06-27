var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        match: /.+@.+\..+/,
        lowercase: true
    },
    loggedInCount:{
        type:Number,
        default:0
    }
});