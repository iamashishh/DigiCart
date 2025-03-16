const mongoose = require("mongoose");
const config  = require("../config/env.config")

const database = () => {
    mongoose.connect(config.MONGODB_URL).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error connecting to MongoDB", err);
        
    })
}

module.exports = database;
