const express = require("express");
const mongoose = require("mongoose");
const sessionController  = require("./controller/sessionController");
const admissionController = require("./controller/admissionController");
const userTypeController = require("./controller/userTypeController");
const resultController = require("./controller/resultController");
const marksController = require("./controller/marksController");
const imageController=require("./controller/imageController")
const userProfileController=require("./controller/userProfileController")
const bodyParser= require("body-parser")
const api = require('./controller/userProfileController')
const multer=require("multer")
const app = express()
const cors = require("cors")
app.use(express.json())  //body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb://localhost:27017/studentManagement",function (err) {

    if (err) {
        console.log("OH NO!! Something went wrong!");
        console.log(err);
    }
    else{
        console.log("db Connected Successfully...");
    }
    
})

//registration--api
app.post("/register",sessionController.signup)
app.get("/getallusers",sessionController.getAllUsers)
app.post("/login",sessionController.login)

//users
app.post("/user",sessionController.addUser)
app.get("/getuserbyid/:userid",sessionController.getuserByid)

//usertype--api
app.get('/userType',userTypeController.getAllUserTypes)
app.post('/userType',userTypeController.addUserType)
app.delete('/userType',userTypeController.deleteUserTypes)
app.put('/userType',userTypeController.updateUserTypes)

//admission--api
app.get('/admission',admissionController.getAllAdmissions)
app.post('/admission',admissionController.addAdmission)
app.delete('/admission',admissionController.deleteAdmission)
app.put('/admission',admissionController.updateAdmission);

//result-api
app.get('/result',resultController.getAllResults);
app.post('/result',resultController.addResult);

//marks--api
app.get('/marks',marksController.getAllMarks);
app.post('/marks',marksController.addMarks);

//image--api
app.post('/upload',imageController.addImage)
app.get('/upload',imageController.getImage)

//userprofile--api
// app.post('/userprofile',userProfileController.addUserProfile)
// app.get('/userprofile',userProfileController.getAllUserProfiles)

//multer
// const upload=multer({dest:"public/images"});
//file upload api
app.use('/public', express.static('public'));
app.use('/api', api)
app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
// app.post("/imageupload",upload.single("profile"),(req,res)=>{
//     res.json({"msg":"profile pic uploaded..."})
// })
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, 'uploads/')
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".png")
//         }
//     })
// }).single('file_name');

// app.post("/uploadimg", upload, (req, resp) => {
//     resp.send("file upload")
// });


app.listen(9109,function(err){
    if(err){
        console.log("Server not connected....");
    }else{
        console.log("server started....at 9109");
    }
});