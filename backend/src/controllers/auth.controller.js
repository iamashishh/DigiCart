const userModel = require("../models/user.model");
const usermodel = require("../models/user.model");
const ErrorHandler = require("../utils/errorHandler");

const { createUser, logoutUser } = require("../services/auth.service");
const redisClient = require("../config/redis.client");

module.exports.userRegister = async (req, res, next) => {
  const { username, email, password, role } = req.body;

  try {
    const userExists = await userModel.findOne({
      email,
    });

    if (userExists) {
      return next(new ErrorHandler("User already exists", 400));
    }

    const hashedPassword = await usermodel.hashingPassword(password);

    const user = await createUser({ username, hashedPassword, email, role });

    const token = await user.generateToken();

    res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 1000 * 60 * 15 // 15 minutes
});

    user.password = undefined;

    res.status(201).json({
      success: true,
      message: "user created successfully",
      user,
      token,
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
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 1000 * 60 * 15 
});

    return res.status(200).json({ success: true, token, user });
  } catch (error) {
    console.log(error);
  }
};

module.exports.userLogout = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return next(new ErrorHandler("Token not found", 400));
    }

    await logoutUser(token);

    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports.checkAuth =  async (req,res)=>{
   const user = req.user;

    const token = await user.generateToken();

    res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 1000 * 60 * 15 
});

    user.password = undefined;

    res.status(200).json({
        success: true,
        message:"authenticated user",
        user,token
    });
}