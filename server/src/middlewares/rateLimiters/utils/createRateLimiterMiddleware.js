const rateLimit = require("express-rate-limit");
const RedisStore = require("rate-limit-redis");
const redis = require('redis');
const {
  TOO_MANY_REQUESTS_ERROR_MSG,
} = require("../../../config/responseErrorsMsgs");
const convertDurationToSeconds = require("../../../utils/convertDurationToSeconds");

const redisClient = redis.createClient({
  url: `rediss://${process.env.REDIS_HOST || 'cartage-redis.redis.cache.windows.net'}:${process.env.REDIS_PORT || 6380}`,
  password: process.env.REDIS_PASSWORD || 'e2dCGYBWo4U6t9lG9WiIe6HwsktpYStaDAzCaHkPPCs=',
  socket: {
    tls: true, // Enable SSLrejectUnauthorized: false// Adjust as needed
  }
});


module.exports = ({
  maxRequests,
  forDuration,
  messageError = TOO_MANY_REQUESTS_ERROR_MSG,
  skipFailedRequests = false,
  skipSuccessfulRequests = false,
  prefix = "rl",
}) =>rateLimit({
    store: new RedisStore({
      client:redisClient,
      sendCommand: (...args) => redisClient.sendCommand(args),
      expiry: convertDurationToSeconds(forDuration),
      prefix,
    }),
    max: maxRequests,
    message: { error: messageError },
    skipFailedRequests,
    skipSuccessfulRequests,
    keyGenerator: (req) => req.clientIp,
  });
