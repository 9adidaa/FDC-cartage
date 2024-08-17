const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const { ADMIN_PANEL_PATH, SECRET_COOKIE_CODE } = require("../config");
const resources = require("./../admin/resources");
const branding = require("./../admin/branding");
const authenticateAdmin = require("../admin/authenticateAdmin");
const locale = require("./../admin/locale");
const createInitialSuperuser = require("../utils/createInitialSuperuser");
const createInitialSiteSettings = require("../utils/createInitialSiteSettings");
const dashboard = require("./../admin/dashboard");
const assets = require("./../admin/assets");
const globalActions = require("../admin/globalActions");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const redis = require("redis");
const convertDurationToSeconds = require("../utils/convertDurationToSeconds");

AdminBro.registerAdapter(AdminBroMongoose);
AdminBro.ACTIONS.list.handler = globalActions.list;

module.exports = async (expressApp) => {
  const adminBro = new AdminBro({
    resources,
    rootPath: ADMIN_PANEL_PATH,
    loginPath: `${ADMIN_PANEL_PATH}/login`,
    logoutPath: `${ADMIN_PANEL_PATH}/logout`,
    assets,
    branding,
    dashboard,
    locale,
  });
  const adminBroRouter = AdminBroExpress.buildAuthenticatedRouter(
    adminBro,
    {
      authenticate: authenticateAdmin,
      cookiePassword: '13e8e39f043c9068064aa9317f830322ca7500be718dd5b9b90fbef6507dee78',
    },
    null,
    {
      cookie: { maxAge: 1000 * convertDurationToSeconds("1day") },
      store: new RedisStore({
        client:redis.createClient({
          url: `rediss://${process.env.REDIS_HOST || 'cartage-redis.redis.cache.windows.net'}:${process.env.REDIS_PORT || 6380}`,
          password: process.env.REDIS_PASSWORD || 'e2dCGYBWo4U6t9lG9WiIe6HwsktpYStaDAzCaHkPPCs=',
          socket: {
              tls: true,          // Enable SSLrejectUnauthorized: false// Adjust as needed
          }
      }),
      }),
      resave: true,
      saveUninitialized: true,
    }
  );
  await createInitialSuperuser();
  await createInitialSiteSettings();
  expressApp.use(ADMIN_PANEL_PATH, adminBroRouter);
};
