const { fyersModel } = require("fyers-api-v3");
const { APIData } = require("../utils");
// const { TokensRepo } = require("../repository");

const fetchData = async (symbol = "NSE:RELIANCE-EQ", strikeCount = 10) => {
  try {
    const { appId, redirectURL } = APIData.sessionData;
    if (!appId || !redirectURL) {
      console.error(
        "FetchData: appId or redirectURL is not set in sessionData."
      );
      return null;
    }
    const { TokensRepo } = require("../repository");
    const token = await TokensRepo.getTokens();
    if (!token || !token.accessToken) {
      throw new Error(
        "FetchData: Access token not found. Please authenticate first."
      );
    }
    if (token.status === "expired") {
      throw new Error(
        "FetchData: Access token has expired. Please refresh it."
      );
    }
    var fyers = new fyersModel();
    fyers.setAppId(appId);
    fyers.setRedirectUrl(redirectURL);
    fyers.setAccessToken(token.accessToken);
    const response = await fyers.getOptionChain({
      symbol: symbol,
      strikecount: strikeCount,
      timestamp: "",
    });
    // console.log("Option chain data from function:", response.data);
    return response.data;
  } catch (err) {
    console.log("FetchData: Error fetching option chain data:", err);
    return null;
  }
};

module.exports = { fetchData };
