const FyersAPI = require("fyers-api-v3").fyersModel;

const getAccessToken = async (appId, secretKey, authcode) => {
  var fyers = new FyersAPI();

  fyers.setAppId(appId);
  fyers.setRedirectUrl(
    "https://trade.fyers.in/api-login/redirect-uri/index.html"
  );

  try {
    const token = await fyers.generate_access_token({
      secret_key: secretKey,
      auth_code: authcode,
    });
    return token;
  } catch (error) {
    console.log("Error getting access token:", error);
    throw new Error("Failed to retrieve access token");
  }
};

module.exports = {
  getAccessToken,
};
