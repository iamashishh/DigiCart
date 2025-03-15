const express = require('express');

const router = express.Router();

const { 
    userRegister ,
    userLogin
} = require('../controllers/auth.controller');

const {
    userRegisterValidator,
    userLoginValidator
} = require("../middlewares/input-validation")


router.post('/register', userRegisterValidator,userRegister );

router.post('/login', userLoginValidator,userLogin );



module.exports = router;
