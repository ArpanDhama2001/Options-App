module.exports = {
  sessionData: {
    appId: "EW1LP8KAGZ-100",
    redirectURL: "https://trade.fyers.in/api-login/redirect-uri/index.html",
    secretKey: "79TLHP67JH",
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZDoxIiwiZDoyIiwieDowIiwieDoxIiwieDoyIl0sImF0X2hhc2giOiJnQUFBQUFCb044dlJzR0FNRm51YWlyXzZGWUdVbVlRTEwySTl5dzdNU05SNmx0SmI1X2hnN3BBS2pxVDVSbFJtbjl1UWhhX1l5RDJocno2eTdoSm1OXzNYVElLNkdHZkVRVUZmcGRqMFRzdmQzMGNLRE1VSk1jWT0iLCJkaXNwbGF5X25hbWUiOiIiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiIyNGU0NzE1ODY4ZTk3OWMxNjAyYzE4MWI4OWMwMmZjZDg3YmUwYzQ0NWE2M2U3YTM1NzVhMzgwZCIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiTiIsImZ5X2lkIjoiWUQxNDI2MSIsImFwcFR5cGUiOjEwMCwiZXhwIjoxNzQ4NTY1MDAwLCJpYXQiOjE3NDg0ODcxMjEsImlzcyI6ImFwaS5meWVycy5pbiIsIm5iZiI6MTc0ODQ4NzEyMSwic3ViIjoiYWNjZXNzX3Rva2VuIn0.AYa90xEVJcawKQs1ey267CktEqgF2MDNGO4m0uMT1sI",
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
    INVALID_SYMBOL: "INVALID_SYMBOL",
    API_ERROR: "API_ERROR",
    DATABASE_ERROR: "DATABASE_ERROR",
    UNKNOWN_ERROR: "UNKNOWN_ERROR",
  },
  error_messages: {
    NO_DATA: "No data available for the requested symbol.",
    INVALID_SYMBOL: "The provided symbol is invalid.",
    API_ERROR: "An error occurred while fetching data from the API.",
    DATABASE_ERROR: "An error occurred while accessing the database.",
    UNKNOWN_ERROR: "An unknown error occurred.",
  },
};
