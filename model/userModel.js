const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    userType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usertype"
    },
    firstName: {
      type: String,
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    phoneNum:{
        type:Number
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    }
});
 

module.exports = mongoose.model("User",UserSchema)