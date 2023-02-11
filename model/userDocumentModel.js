const mongoose = require("mongoose")

const UserDocumentSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    License:{
        type:String
    }
})

module.exports=mongoose.model("UserDocument",UserDocumentSchema)