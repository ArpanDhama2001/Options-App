const { RefreshAccessTokenAPI } = require("../api");
const Token = require("../models/tokens");
const { ServerConfig } = require("../config");

const saveTokens = async (accessToken, refreshToken) => {
  try {
    const accessTokenExpiresAt = new Date(
      Date.now() + ServerConfig.ACCESS_TOKEN_EXPIRE_TIME * 60 * 60 * 1000
    );
    const refreshTokenExpiresAt = new Date(
      Date.now() + ServerConfig.REFRESH_TOKEN_EXPIRE_TIME * 60 * 60 * 1000
    );

    const tokenData = {
      accessToken,
      refreshToken,
      accessTokenExpiresAt,
      refreshTokenExpiresAt,
    };

    // Check if a token already exists
    let existingToken = await Token.findOne({});

    if (existingToken) {
      // Update the existing token
      existingToken.accessToken = tokenData.accessToken;
      existingToken.refreshToken = tokenData.refreshToken;
      existingToken.accessTokenExpiresAt = tokenData.accessTokenExpiresAt;
      existingToken.refreshTokenExpiresAt = tokenData.refreshTokenExpiresAt;
      await existingToken.save();
    } else {
      // Create a new token
      await Token.create(tokenData);
    }

    console.log("Token Repo: Tokens saved successfully");
    return tokenData;
  } catch (error) {
    console.error("Token Repo: Error saving tokens:", error);
    throw error;
  }
};

const updateAccessToken = async () => {
  try {
    const token = await getTokens();
    const { accessToken, refreshToken } = token;
    if (!refreshToken) {
      throw new Error("Token Repo: Refresh token not found");
    }
    const now = new Date();
    if (now > token.refreshTokenExpiresAt) {
      token.status = "expired";
      await token.save();
      throw new Error("Token Repo: Refresh token expired. Re-auth required.");
    }
    const newAccessToken = await RefreshAccessTokenAPI.refreshAccessToken(
      refreshToken
    );
    if (!newAccessToken) {
      throw new Error("Token Repo: Failed to refresh access token");
    }
    token.accessToken = newAccessToken;
    token.accessTokenExpiresAt = new Date(
      Date.now() + ServerConfig.ACCESS_TOKEN_EXPIRE_TIME * 60 * 60 * 1000
    );
    await token.save();
    return token;
  } catch (error) {
    console.error("Token Repo: Error updating access token:", error);
    throw error;
  }
};

const getTokens = async () => {
  try {
    const token = await Token.findOne({});
    if (!token) {
      throw new Error("Token Repo: No tokens found");
    }
    return token;
  } catch (error) {
    console.error("Token Repo: Error retrieving tokens:", error);
    throw error;
  }
};
const deleteTokens = async () => {
  try {
    await Token.deleteMany({});
    console.log("Token Repo: Tokens deleted successfully");
  } catch (error) {
    console.error("Token Repo: Error deleting tokens:", error);
    throw error;
  }
};

const getRemainingTime = async () => {
  try {
    const token = await getTokens();
    if (!token) {
      throw new Error("Token Repo: No tokens found");
    }
    const now = new Date();
    const remainingTime = token.refreshTokenExpiresAt - now;
    return remainingTime > 0 ? remainingTime : 0;
  } catch (error) {
    console.error("Token Repo: Error getting remaining time:", error);
    throw error;
  }
};

module.exports = {
  saveTokens,
  updateAccessToken,
  getTokens,
  deleteTokens,
  getRemainingTime,
};
