const { fyersModel } = require("fyers-api-v3");
const { APIData } = require("../utils");

const historyData = async (symbol = "NSE:RELIANCE-EQ") => {
  try {
    var fyers = new fyersModel();
    fyers.setAppId(APIData.sessionData.appId);
    fyers.setRedirectUrl(APIData.sessionData.redirectURL);
    fyers.setAccessToken(APIData.sessionData.accessToken);

    var inp = {
      symbol: symbol,
      resolution: "D",
      date_format: "0",
      range_from: Date.parse("Tue May 27 2025 10:28:00").toString(),
      range_to: Date.parse("Mon May 26 2025 10:28:00").toString(),
      cont_flag: "1",
      oi_flag: "1",
    };
    const response = await fyers.getHistory(inp);
    console.log("Historical data:", response.data);
  } catch (error) {
    console.error("Error initializing Fyers API:", error);
  }
};

module.exports = { historyData };
