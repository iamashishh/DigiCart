const express = require('express');

const router = express.Router();

const { 
    userRegister 
} = require('../controllers/auth.controller');

const {
    userRegisterValidator
} = require("../middlewares/input-validation")


router.post('/register', userRegisterValidator,userRegister );

module.exports = router;
