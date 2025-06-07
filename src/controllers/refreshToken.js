const { TokensRepo } = require("../repository");

const updateAccessTokenController = async (req, res) => {
  try {
    const response = await TokensRepo.updateAccessToken();
    return res.status(200).json({ access_token: response });
  } catch (error) {
    throw error;
  }
};

module.exports = { updateAccessTokenController };
