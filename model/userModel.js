const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
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
    // ,role:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Role"
    // }
});
 

module.exports = mongoose.model("User",UserSchema)