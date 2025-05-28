const { StatusCodes } = require("http-status-codes");
const { AccessTokenAPI } = require("../api");

const getAccessTokenController = async (req, res) => {
  try {
    const { appID, secretKey, authCode } = req.body;
    if (!appID || !secretKey || !authCode) {
      return res
        .status(400)
        .json({ error: "appID, secretKey, and authCode are required" });
    }
    const token = await AccessTokenAPI.getAccessToken(
      appID,
      secretKey,
      authCode
    );
    if (!token || !token.access_token || !token.refresh_token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Invalid appID, secretKey, or authCode" });
    }
    res.cookie("access_token", token.access_token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "Strict", // Helps prevent CSRF attacks
      maxAge: 8 * 60 * 60 * 1000, // Cookie expiration time (8 hours)
    });
    res.cookie("refresh_token", token.refresh_token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "Strict", // Helps prevent CSRF attacks
      maxAge: 8 * 60 * 60 * 1000, // Cookie expiration time (8 hours)
    });
    res.status(200).json({
      message: "Token refreshed successfully",
      access_token: token.access_token,
    });
  } catch (error) {
    console.error("Error refreshing token:", error);
    res
      .status(500)
      .json({ message: "Failed to refresh token", error: error.message });
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
