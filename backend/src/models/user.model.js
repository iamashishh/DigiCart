const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../config/env.config")

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // Prevent returning password in queries
    },
    address: {
      street: { type: String, default: "" },
      city: { type: String, default: "" },
      state: { type: String, default: "" },
      country: { type: String, default: "" },
      zipCode: { type: String, default: "" },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    googleId: {
      type: String,
      default: null, // For Google OAuth
    },
    cart:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"cart"
    },
    resetPasswordToken: String, // For Forgot Password
    resetPasswordExpire: Date,
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);


userSchema.statics.hashingPassword = async function (password) {
  return await bcrypt.hash(password, 12);
}

userSchema.methods.matchPassword = async function(password){
  return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, timestamp: Date.now() }, // Add dynamic timestamp
    config.JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );
}

userSchema.statics.verifyToken =  function(token){
  return  jwt.verify(token,config.JWT_SECRET_KEY);
}

module.exports = mongoose.model("user", userSchema);
