const { StatusCodes } = require("http-status-codes");
const { RefreshAccessToken } = require("../utils");

const getRefreshTokenController = async (req, res) => {
  // get access token from the db and pass to RefreshAccessToken.refresshAccessToken(accessToken);
};

module.exports = { getRefreshTokenController };
