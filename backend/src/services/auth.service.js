const usermodel = require("../models/user.model");


module.exports.createUser = async({username,hashedPassword,email})=>{

    if(!username || !hashedPassword || !email){
        throw new Error("All fields are required");
    }
    

    const user  = await usermodel.create({
        username,
        password:hashedPassword,
        email
    })

    return user;

}