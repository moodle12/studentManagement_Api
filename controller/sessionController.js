const UserModel = require("../model/userModel")


module.exports.login = function (req, res) {

    //logic 
    let email = req.body.email
    let password = req.body.password

    UserModel.findOne({
        $and: [
            { "email": email },
            { "password": password }
        ]
    }).exec(function (err, data) {
        if (data == "" || data == undefined) {
            res.json({
                status: -1,
                msg: "Invalid Credentails",
                data: req.body
            })
        } else {
            res.json({
                status: 200,
                msg: "Login done...",
                data: data
            })
        }
    });

}//
//addUser
module.exports.addUser = function (req, res) {

    let userType = req.body.userType
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNum= req.body.phoneNum;
    let password = req.body.password;
    let confirmPassword=req.body.confirmPassword;

    let user = new UserModel(
        { 
            // "userID": userID, 
            "userType":userType,
            "firstName": firstName,
            "lastName":lastName,
            "email":email,
            "phoneNum":phoneNum,
            "password":password,
            "confirmPassword":confirmPassword
        }
    )

    user.save(function (err, data) {
        if (err) {
            console.log(err);
            res.json({
                msg: "User not added",
                status: -1,
                data: "Something went wrong!!"
            })
        } else {
            res.json({
                msg: "User added",
                status: 200,
                data: data
            })
        }
    })
}//addUser
//adduserends
module.exports.signup = function (req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNum= req.body.phoneNum;
    let password = req.body.password;
    let confirmPassword=req.body.confirmPassword;
    // let role = req.body.role
    console.log(req.body);
    let u = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phoneNum":phoneNum,
        "password": password,
        "confirmPassword":confirmPassword
    }


    let user = new UserModel(u)

    user.save(function (err, success) {
        if (err) {
            res.json({
                status: -1,
                msg: "SME",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "user added",
                data: success
            })
        }
    })
}


module.exports.getAllUsers = function (req, res) {
    UserModel.find().populate("userType").exec(function (err, data) {
        if (err) {
            res.json({
                status: -1,
                msg: "SME",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "User Reter....",
                data: data
            })
        }
    })
}

module.exports.getuserByid = function(req,res){
    let userid = req.params.userid;
    UserModel.findOne({_id:userid},function (err,data) {
        if (err) {
            res.json({
                status: -1,
                msg: "SME",
                data: err
            })
        } else {
            res.json({
                status: 200,
                msg: "user reterieved..",
                data: data
            })
        }
    })

}