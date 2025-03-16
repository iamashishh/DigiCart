const {validationResult,check} = require("express-validator")

exports.userRegisterValidator = [
    check("username").notEmpty().withMessage("Name is required ").isLength({min:3,max:30}).withMessage("min 3 charcters and max 30 characters"),

    check("email").isEmail().withMessage("Email is required").isLength({min:6}).withMessage("Email must be atleast 6 characters long"),


    check("password").notEmpty().withMessage("password is required").isLength({min:6}).withMessage("Password must be atleast 6 characters long").matches(/\d/).withMessage("Password must contain a number"),

    check("role").notEmpty().withMessage("Role is required").isIn(["user","admin"]).withMessage("Role must be either user or admin"),
    
    (req,res,next)=>{
        const errors= validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()[0].msg})
        }
        next()
    }

]

exports.userLoginValidator = [
    check("email").isEmail().withMessage("Email is required").isLength({min:6}).withMessage("Email must be atleast 6 characters long"),

    check("password").notEmpty().withMessage("password is required").isLength({min:6}).withMessage("Password must be atleast 6 characters long").matches(/\d/).withMessage("Password must contain a number"),
    
    (req,res,next)=>{
        const errors= validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()[0].msg})
        }
        next()
    }
]

exports.productCreateValidator = [
    check("name").notEmpty().withMessage("Name is required").isLength({min:3,max:100}).withMessage("Name must be atleast 3 characters long and atmost 100 characters long"),
    check("price").notEmpty().withMessage("Price is required").isNumeric().withMessage("Price must be a number"),
    check("description").notEmpty().withMessage("Description is required").isLength({min:10,max:2000}).withMessage("Description must be atleast 10 characters long and atmost 2000 characters long"),
    check("category").notEmpty().withMessage("Category is required").isLength({min:3}).withMessage("Category must be atleast 3 characters long"),
    check("stock").notEmpty().withMessage("Quantity is required").isNumeric().withMessage("Quantity must be a number"),
    (req,res,next)=>{
        const errors= validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()[0].msg})
        }
        next()
    }
]