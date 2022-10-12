const express = require("express");
const mongoose = require("mongoose");
const sessionController  = require("./controller/sessionController");
const admissionController = require("./controller/admissionController");
const userTypeController = require("./controller/userTypeController");
const resultController = require("./controller/resultController");
const marksController = require("./controller/marksController");
const app = express()
const cors = require("cors")
app.use(express.json())  //body
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


app.listen(9109,function(err){
    if(err){
        console.log("Server not connected....");
    }else{
        console.log("server started....at 9109");
    }
});