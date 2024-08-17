const express = require("express");
//require("express-async-errors");
const loadMongoose = require("./loaders/mongoose");
const loadExpress = require("./loaders/express");
const loadAdminBro = require("./loaders/admin-bro");
//const rateLimit = require('express-rate-limit');
//const RedisStore = require('rate-limit-redis');
const { PORT } = require("./config");
const handleAppListenCallback = require("./utils/handleAppListenCallback");
const createClientsForTesting = require("./utils/createClientsForTesting");
const redis = require('redis');

async function startServer() {
  const client = redis.createClient({
    url: `rediss://${process.env.REDIS_HOST || 'cartage-redis.redis.cache.windows.net'}:${process.env.REDIS_PORT || 6380}`,
    password: process.env.REDIS_PASSWORD || 'e2dCGYBWo4U6t9lG9WiIe6HwsktpYStaDAzCaHkPPCs=',
    socket: {
        tls: true,          // Enable SSLrejectUnauthorized: false// Adjust as needed
    }
});

client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', (err) => {
    console.error('Redis connection error:', err);
});
  const app = express();  
  await loadMongoose();
  //   await createClientsForTesting();
  //testing server
  app.get('/hello-world', (req, res) => {
    res.send('<h1> Hello, World! </h1>');
  });
  //testing server
  loadExpress(app);
  await loadAdminBro(app);
  app.listen(PORT, handleAppListenCallback);
}

startServer();
