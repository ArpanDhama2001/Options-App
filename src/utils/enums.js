module.exports = {
  sessionData: {
    appId: "EW1LP8KAGZ-100",
    redirectURL: "https://trade.fyers.in/api-login/redirect-uri/index.html",
    secretKey: "79TLHP67JH",
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZDoxIiwiZDoyIiwieDowIiwieDoxIiwieDoyIl0sImF0X2hhc2giOiJnQUFBQUFCb081d0VUakxRMGFVY1JJd0F4bjZSZzBJUWZybDRBR1U2TnlIZGNJUUNJeFVuX3BVZmxCMEl0aVFITElqVTRJSEpZOGMzN3k2a3Jzc1RpUmdTWnNUa0twMUFWX0FfVjF4WEd2eDVWOTZqaWhJbUhlYz0iLCJkaXNwbGF5X25hbWUiOiIiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiIyNGU0NzE1ODY4ZTk3OWMxNjAyYzE4MWI4OWMwMmZjZDg3YmUwYzQ0NWE2M2U3YTM1NzVhMzgwZCIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiTiIsImZ5X2lkIjoiWUQxNDI2MSIsImFwcFR5cGUiOjEwMCwiZXhwIjoxNzQ4ODI0MjAwLCJpYXQiOjE3NDg3MzcwMjgsImlzcyI6ImFwaS5meWVycy5pbiIsIm5iZiI6MTc0ODczNzAyOCwic3ViIjoiYWNjZXNzX3Rva2VuIn0.lVsNRLCovTi3_uxrWJvJWZuilIsHHYLkoZl5PCwDKoA",
  },
  symbols: [
    "NSE:NIFTY50-INDEX",
    "NSE:NIFTYBANK-INDEX",
    "NSE:RELIANCE-EQ",
    // "NSE:MIDCPNIFTY-INDDX",
    "NSE:FINNIFTY-INDEX",
    "BSE:SENSEX-INDEX",
  ],
  strikeCounts: [5, 10, 15, 20, 25, 30],
  error_code: {
    NO_DATA: "NO_DATA",
    NO_DELAYED_DATA: "NO_DELAYED_DATA",
    INVALID_SYMBOL: "INVALID_SYMBOL",
    API_ERROR: "API_ERROR",
    DATABASE_ERROR: "DATABASE_ERROR",
    UNKNOWN_ERROR: "UNKNOWN_ERROR",
  },
  error_messages: {
    NO_DATA: "No data available for the requested symbol.",
    NO_DELAYED_DATA: "No delayed data available for the requested time.",
    INVALID_SYMBOL: "The provided symbol is invalid.",
    API_ERROR: "An error occurred while fetching data from the API.",
    DATABASE_ERROR: "An error occurred while accessing the database.",
    UNKNOWN_ERROR: "An unknown error occurred.",
  },
};
