const dotenv = require("dotenv");
const path = require("path");

// Explicitly resolve to the root .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  ACCESS_TOKEN_EXPIRE_TIME: process.env.ACCESS_TOKEN_EXPIRE_TIME || 5, // in hours
  REFRESH_TOKEN_EXPIRE_TIME: process.env.REFRESH_TOKEN_EXPIRE_TIME || 336, // in hours
};
