const multer= require("multer")
const imageModel= require("../model/imageModel")
const fs=require("fs")
//storage
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
      },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
});

const upload=multer({
    storage:Storage
}).single('testImage')

module.exports.addImage=function(req,res){
    upload(req,res,(err)=>{
        if (err) {
            console.log(err);
        }
        else{
            const newImage= new imageModel({
                imgname:req.body.imgname,
                image:{
                    data:fs.readFileSync("uploads/" + req.file.filename),
                    contentType:"image/png",
                },
            });
            newImage.save().then(()=>res.send("Successfully uploaded")).catch((err)=>console.log(err))
        }
    })
}
module.exports.getImage=async function(req,res){
    const allData=await imageModel.find()
    res.json(allData)
}