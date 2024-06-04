const mongoose = require('mongoose');

const applys =new  mongoose.Schema({

    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    password:{
        type:String,
        required:true
    },
    passwordrepeat:{
        type:String,
        required:true
    },
    browser:{
      type:String,
      required:true
    }
  
  })

  const registeration =new mongoose.model("registeration",applys);

  module.exports=registeration

  