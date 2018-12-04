const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = mongoose.Schema({
    username:{ 
        required: true,
        type:String,
        maxlength: 100
    },
    name:{
        required: true,
        type:String,
        maxlength: 100
      },
    password: {
        type:String,
        equired: true,
        minlength: 5
  },
    category:{
        type: String, 
        required: true, 
        trim: true 
    },
    email:{
        type:String,
        required: true,
        trim: true,
        unique: 1
      },
    phoneNumber:{ 
        type: String, 
        required: true, 
        trim: true 
    },
    irsStatus:{ 
        type: String, 
        required: true 
    },
    role:{
        type:Number,
        default:0 
      },
    mission:{ 
        type: String, 
        required: false, 
        maxlength: 1000000
    },
    token:{
        type:String
      },
      resetToken:{
        type:String
      },
      resetTokenExp:{
        type:Number
      }
});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = { Charity };