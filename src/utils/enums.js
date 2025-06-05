module.exports = {
  sessionData: {
    appId: "EW1LP8KAGZ-100",
    redirectURL: "https://trade.fyers.in/api-login/redirect-uri/index.html",
    secretKey: "79TLHP67JH",
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZDoxIiwiZDoyIiwieDowIiwieDoxIiwieDoyIl0sImF0X2hhc2giOiJnQUFBQUFCb1FOOTJIcWFXcmNiUktpNGFlQjlpcENTT21IZHg2bFFxczM4WkcybTBHMjR4MlJWYXdRaWFBQVF5c3Y5eHJybkIxd0ZpTUNFa2VpRDZvVEZYR09kVE0zQmRqMzhQNkg0aVdya2hKQllIb3FESDRBMD0iLCJkaXNwbGF5X25hbWUiOiIiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiIyNGU0NzE1ODY4ZTk3OWMxNjAyYzE4MWI4OWMwMmZjZDg3YmUwYzQ0NWE2M2U3YTM1NzVhMzgwZCIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiTiIsImZ5X2lkIjoiWUQxNDI2MSIsImFwcFR5cGUiOjEwMCwiZXhwIjoxNzQ5MTY5ODAwLCJpYXQiOjE3NDkwODE5NzQsImlzcyI6ImFwaS5meWVycy5pbiIsIm5iZiI6MTc0OTA4MTk3NCwic3ViIjoiYWNjZXNzX3Rva2VuIn0.FEvV6QKGcAiQPuscry-0ENWoQkvnqhVFlTPzkxpXrPQ",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZDoxIiwiZDoyIiwieDowIiwieDoxIiwieDoyIl0sImF0X2hhc2giOiJnQUFBQUFCb1FOOTJIcWFXcmNiUktpNGFlQjlpcENTT21IZHg2bFFxczM4WkcybTBHMjR4MlJWYXdRaWFBQVF5c3Y5eHJybkIxd0ZpTUNFa2VpRDZvVEZYR09kVE0zQmRqMzhQNkg0aVdya2hKQllIb3FESDRBMD0iLCJkaXNwbGF5X25hbWUiOiIiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiIyNGU0NzE1ODY4ZTk3OWMxNjAyYzE4MWI4OWMwMmZjZDg3YmUwYzQ0NWE2M2U3YTM1NzVhMzgwZCIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiTiIsImZ5X2lkIjoiWUQxNDI2MSIsImFwcFR5cGUiOjEwMCwiZXhwIjoxNzUwMzc5NDAwLCJpYXQiOjE3NDkwODE5NzQsImlzcyI6ImFwaS5meWVycy5pbiIsIm5iZiI6MTc0OTA4MTk3NCwic3ViIjoicmVmcmVzaF90b2tlbiJ9.webgZRHooTSibgHFhWAsVlgvyXKzZ0r9yquWtHf-5B8",
    pin: "1234", // Your 4-digit trade pin
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
