const mongoose = require("mongoose")

const ImageSchema= new mongoose.Schema({
    imgname:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    }
})

module.exports=mongoose.model("Image",ImageSchema)