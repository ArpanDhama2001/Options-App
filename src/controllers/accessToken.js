const { StatusCodes } = require("http-status-codes");
const { AccessTokenAPI } = require("../api");
const { TokensRepo } = require("../repository");

const createAccessTokenController = async (req, res) => {
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
    const savedToken = await TokensRepo.saveTokens(
      token.access_token,
      token.refresh_token
    );
    // console.log("SavedToken:", savedToken);
    return res.status(200).json({
      message: "AccessToken Controller: Access token saved successfully",
      access_token: token.access_token,
      refresh_token: token.refresh_token,
      access_token_expiry: savedToken?.accessTokenExpiresAt,
      refresh_token_expiry: savedToken?.refreshTokenExpiresAt,
    });
  } catch (error) {
    console.error(
      "AccessToken Controller: Error creating acesss token:",
      error
    );
    res.status(500).json({
      message: "AccessToken Controller: Failed to create acess token",
      error: error,
    });
  }
};

const getAccessTokenController = async (req, res) => {
  try {
    const token = await TokensRepo.getTokens();
    console.log("Get Token Controller: token:", token);
    res.status(200).json({
      message: "AccessToken Controller: Access token fetched successfully",
      access_token: token.accessToken,
      refresh_token: token.refreshToken,
      access_token_expiry: token.accessTokenExpiresAt,
      refresh_token_expiry: token.refreshTokenExpiresAt,
    });
  } catch (error) {
    console.error("AccessToken Controller: Error getting access token:", error);
    res.status(500).json({
      message: "AccessToken Controller: Failed to get access token",
      error: error.message,
    });
  }
};

const getRemainingTimeController = async (req, res) => {
  try {
    const timeLeft = await TokensRepo.getRemainingTime();
    res.status(200).json({
      message: "AccessToken Controller: Remaining time fetched successfully",
      remainingTime: timeLeft,
    });
  } catch (error) {
    console.error(
      "AccessToken Controller: Error getting remaining time:",
      error
    );
    res.status(500).json({
      message: "AccessToken Controller: Failed to get remaining time",
      error: error.message,
    });
  }
};

module.exports = {
  createAccessTokenController,
  getAccessTokenController,
  getRemainingTimeController,
};
