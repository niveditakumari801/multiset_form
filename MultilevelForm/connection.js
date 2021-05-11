require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.db; //used mongo atlas whose name is in .env file

mongoose.connect(url , {useNewUrlParser:true , useUnifiedTopology: true} , (err)=>{
    if(!err){
        console.log("connected");
    }else{
        console.log('Error in connection ' + err);
    }
});