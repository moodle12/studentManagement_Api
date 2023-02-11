const mongoose = require("mongoose");

const LeaveUserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
    },
    mobileNo:{
        type:Number
    },
    currentInstitute:{
        type:String
    },
    reasonLeaving:{
        type:String
    }
});

module.exports=mongoose.model("LeaveUser",LeaveUserSchema)