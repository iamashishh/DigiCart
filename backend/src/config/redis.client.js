const Redis = require("ioredis");
const config = require("../config/env.config");

const redisClient = new Redis({
    port: config.REDIS_PORT,
    host: config.REDIS_HOST,
    password: config.REDIS_PASSWORD,
    retryStrategy: (times) => {
        console.log(`Redis connection failed, retrying... Attempt: ${times}`);
        return Math.min(times * 50, 2000); 
    }
});

redisClient.on("connect", () => {
    console.log("✅ Redis connected successfully!");
});

redisClient.on("error", (err) => {
    console.error("❌ Redis connection error:", err.message);
});

redisClient.on("reconnecting", (time) => {
    console.log(`🔄 Redis reconnecting... Attempt in ${time}ms`);
});

module.exports = redisClient;
