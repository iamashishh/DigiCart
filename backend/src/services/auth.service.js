const usermodel = require("../models/user.model");
const ErrorHandler = require("../utils/errorHandler")



module.exports.createUser = async({username,hashedPassword,email})=>{

    if(!username || !hashedPassword || !email){
        throw new ErrorHandler("All fields are required");
    }
    

    const user  = await usermodel.create({
        username,
        password:hashedPassword,
        email
    })

    const savedUser = await user.save();

    savedUser.password = undefined;

    return savedUser;

}