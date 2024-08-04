const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT || 3000,
    REDIS_PORT : process.env.REDIS_PORT || "6379",
    REDIS_HOST :  "127.0.0.1",
    PROBLEM_SERVICE_URL : process.env.PROBLEM_SERVICE_URL || "http://localhost:3000",
}