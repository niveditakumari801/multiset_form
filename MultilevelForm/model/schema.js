const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true  
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        enum : ["male" , "female"], // used enum that user can choose between male and female only
        required : true
    },
    ismarried : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('multilevelForm' , userSchema);