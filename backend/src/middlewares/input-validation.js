const {validationResult,check} = require("express-validator")

exports.userRegisterValidator = [
    check("username").notEmpty().withMessage("Name is required ").isLength({min:3,max:30}).withMessage("min 3 charcters and max 30 characters"),

    check("email").isEmail().withMessage("Email is required").isLength({min:6}).withMessage("Email must be atleast 6 characters long"),


    check("password").notEmpty().isLength({min:6}).withMessage("Password must be atleast 6 characters long").matches(/\d/).withMessage("Password must contain a number"),
    
    (req,res,next)=>{
        const errors= validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()[0].msg})
        }
        next()
    }

]