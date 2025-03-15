require('dotenv').config();

const _config = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URI
}

const config = Object.freeze(_config);

module.exports = config;