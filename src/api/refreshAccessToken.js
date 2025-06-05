const { sessionData } = require("../utils/enums.js");

const axios = require("axios");
const crypto = require("crypto");

// Your credentials
const appId = sessionData.appId; // Your Fyers app ID
const appSecret = sessionData.secretKey; // Your Fyers app secret
const rt = sessionData.refreshToken; // Your Fyers refresh token
const pin = sessionData.pin; // Your Fyers 4-digit trade pin

// Step 1: Compute appIdHash
const hashInput = `${appId}:${appSecret}`;
const appIdHash = crypto.createHash("sha256").update(hashInput).digest("hex");
// console.log("Hash input for appId:", hashInput);
// console.log("Computed appIdHash:", appIdHash);

// Step 2: Make the refresh request
async function refreshAccessToken(refreshToken = rt) {
  try {
    const response = await axios.post(
      "https://api-t1.fyers.in/api/v3/validate-refresh-token",
      {
        grant_type: "refresh_token",
        appIdHash,
        refresh_token: refreshToken,
        pin,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // console.log("New access token:", response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error(
      "Refresh token failed:",
      error.response?.data || error.message
    );
  }
}

module.exports = { refreshAccessToken };
