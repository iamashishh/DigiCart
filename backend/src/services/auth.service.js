const redisClient = require("../config/redis.client");
const usermodel = require("../models/user.model");
const ErrorHandler = require("../utils/errorHandler")



module.exports.createUser = async({username,hashedPassword,email,role})=>{

    if(!username || !hashedPassword || !email){
        throw new ErrorHandler("All fields are required");
    }
    

    const user  = await usermodel.create({
        username,
        password:hashedPassword,
        email,
        role
    })

    const savedUser = await user.save();

    savedUser.password = undefined;

    return savedUser;

}

module.exports.logoutUser = async(token)=>{
    const result  = redisClient.set(`blacklist:${token}`,token,"EX",24*60*60);
    if(!result){
        throw new ErrorHandler("Failed to blacklist the token");
    }

    return true;
}