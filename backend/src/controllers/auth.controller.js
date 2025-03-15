const userModel = require("../models/user.model");
const usermodel = require("../models/user.model");

const {createUser} = require("../services/auth.service")

module.exports.userRegister =async (req,res,next)=>{

    const {username,email,password} = req.body;
 
    try {   

    const userExists = await userModel.findOne({
        email
    })

    if(userExists){
        return res.status(400).json({
            message:"User already exists with this email id "
        })
    }

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

module.exports.userLogin = async(req,res,next)=>{

    const {email,password} = req.body;

    try {
        const user = await usermodel.findOne({email}).select("+password");

        if(!user){
            return res.status(400).json({message:"Email or Password is incorrect"});
        }

        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(400).json({message:"Email or Password is incorrect"});
        }

        const token = await user.generateToken();

        user.password = undefined;

        res.cookie("token", token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), 
            httpOnly: true, 
        });
        

        return res.status(200).json({token,user})

        
    } catch (error) {
        console.log(error);
        
        
    }

}