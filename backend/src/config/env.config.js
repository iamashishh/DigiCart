require('dotenv').config();

const _config = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    REDIS_HOST : process.env.REDIS_HOST,
    REDIS_PORT : process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD
}

const config = Object.freeze(_config);

module.exports = config;