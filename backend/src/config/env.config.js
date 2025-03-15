require('dotenv').config();

const _config = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
}

const config = Object.freeze(_config);

module.exports = config;