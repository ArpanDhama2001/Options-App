const { StatusCodes } = require("http-status-codes");
const { AccessTokenAPI } = require("../api");
const { Token } = require("../repository");

const getAccessTokenController = async (req, res) => {
  try {
    const { appID, secretKey, authCode } = req.body;
    if (!appID || !secretKey || !authCode) {
      return res.status(400).json({
        error:
          "AccessToken Controller: appID, secretKey, and authCode are required",
      });
    }
    const token = await AccessTokenAPI.getAccessToken(
      appID,
      secretKey,
      authCode
    );
    if (!token || !token.access_token || !token.refresh_token) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: "AccessToken Controller: Invalid appID, secretKey, or authCode",
      });
    }

    // Save the tokens to the database
    await Token.saveTokens(token.access_token, token.refresh_token);
    return res.status(200).json({
      message: "AccessToken Controller: Access token saved successfully",
      access_token: token.access_token,
      refresh_token: token.refresh_token,
    });
  } catch (error) {
    console.error("AccessToken Controller: Error refreshing token:", error);
    res.status(500).json({
      message: "AccessToken Controller: Failed to refresh token",
      error: error.message,
    });
  }
};

const setAccessTokenController = (req, res) => {
  const access_token = req.cookies.access_token;
  const refresh_token = req.cookies.refresh_token;
  if (!access_token || !refresh_token) {
    console.error("Access token or refresh token not found in cookies");
    return res
      .status(401)
      .json({ error: "Access token or refresh token not found" });
  }
  res.status(200).json({
    message: "Access token retrieved successfully from cookies",
    access_token: access_token,
    refresh_token: refresh_token,
  });
};

module.exports = { getAccessTokenController, setAccessTokenController };
