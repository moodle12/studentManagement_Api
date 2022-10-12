const mongoose = require("mongoose");

const AdmissionSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number
    },
    address:{
        type:String
    },
    gender:{
        type:String
    },
    dob:{
        type:Date
    },
    password:{
        type:String,
        required:true,
        min: [6, 'Must be at least 6, got {VALUE}'],
        max: 12
    },
    falseAttempts:{
        type:Number
    },
    isApproved:{
        type:Boolean
    }
});

module.exports=mongoose.model("Admission",AdmissionSchema)