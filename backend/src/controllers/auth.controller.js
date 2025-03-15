const userModel = require("../models/user.model");
const usermodel = require("../models/user.model");
const ErrorHandler = require("../utils/errorHandler");

const { createUser } = require("../services/auth.service");
const redisClient = require("../config/redis.client");

module.exports.userRegister = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await userModel.findOne({
      email,
    });

    if (userExists) {
      return next(new ErrorHandler("User already exists", 400));
    }

    const hashedPassword = await usermodel.hashingPassword(password);

    const user = await createUser({ username, hashedPassword, email });

    res.status(201).json({
      success: true,
      message: "user created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await usermodel.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Email or Password is incorrect", 400));
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorHandler("Email or Password is incorrect", 400));
    }

    const token = await user.generateToken();

    user.password = undefined;

    res.cookie("token", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
    });

    return res.status(200).json({ token, user });
  } catch (error) {
    console.log(error);
  }
};

module.exports.userLogout = (req, res, next) => {
    
};
