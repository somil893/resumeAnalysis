//auth, isStudent, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res, next) => {
    try{
        //extract JWT token
        //PEnding: others ways to fetch token

        // console.log("cookie", req.cookies.token);
        // console.log("body", req.body.token);
        // console.log("header", req.header("Authorization").replace("Bearer ",""));
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }

        //verify the token
        try{
            //decode -> payload
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            //why this?
            req.user = decode; 
        }
        catch(err){
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();
    }
    catch(err){
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token',
        });
    }  
}

exports.isUser = (req,res,next) => {
    try{
        if(req.user.role != "user"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for students',
            });
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:'User role cannot be verified',
        });
    }
}

exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.role != "admin"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for admin',
            });
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:'User role cannot be verified',
        });
    }
}