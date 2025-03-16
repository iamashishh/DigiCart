const redisClient = require("../config/redis.client");
const userModel = require("../models/user.model");
const ErrorHandler = require("../utils/errorHandler");


module.exports.isLogin = async (req, res, next) => {
    const token =  req.cookies.token || req.headers.authorization?.split(" ")[1] 

    if (!token) {
        return next(new ErrorHandler("unauthorized jwt", 401));
    };

    try {

        const blacklistedToken = await redisClient.get(`blacklist:${token}`);

        if (blacklistedToken) {
            return next(new ErrorHandler("Token is blacklisted", 401));
        }

        const decoded = userModel.verifyToken(token);

        if(!decoded){
            return next(new ErrorHandler("Invalid token",401));
        }
        const user = await userModel.findById(decoded.id);
        
        req.user = user;

        return next();
        
    } catch (error) {
        return next(new ErrorHandler("unauthorized jwt", 401));
        
    }
}

module.exports.isAdmin = async (req, res, next) => {
    if (req.user?.role !== "admin") {
        return next(new ErrorHandler("You are not authorized to access this route, Admin access is required", 403));
    }
    next();
}