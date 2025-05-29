const { fyersModel } = require("fyers-api-v3");
const { APIData } = require("../utils");

const fetchData = async (symbol = "NSE:RELIANCE-EQ", strikeCount = 10) => {
  const { accessToken, appId, redirectURL } = APIData.sessionData;
  console.log("API Call with symbol:", symbol, "and strikeCount:", strikeCount);
  try {
    var fyers = new fyersModel();
    fyers.setAppId(appId);
    fyers.setRedirectUrl(redirectURL);
    fyers.setAccessToken(accessToken);

    const response = await fyers.getOptionChain({
      symbol: symbol,
      strikecount: strikeCount,
      timestamp: "",
    });
    // console.log("Option chain data from function:", response.data);
    return response.data;
  } catch (err) {
    console.log("Error fetching option chain data:", err);
    return null;
  }
};

module.exports = { fetchData };
