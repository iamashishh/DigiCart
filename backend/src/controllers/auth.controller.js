const usermodel = require("../models/user.model");

const {createUser} = require("../services/auth.service")

module.exports.userRegister =async (req,res,next)=>{

    const {username,email,password} = req.body;
 
    try {   

    const hashedPassword = await usermodel.hashingPassword(password)
        
    const user = await createUser({username,hashedPassword,email});

    res.status(201).json({
        message:"User created successfully",
        user
    })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })
        
    }

}

module.exports.userlogin = async(req,res,next)=>{
    res.send("User login");
}