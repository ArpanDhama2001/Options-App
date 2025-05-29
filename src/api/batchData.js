const { APIData } = require("../utils");
const { GetVolume } = require("../utils/");
const { fetchData } = require("./optionsData");
const { error_code, error_messages } = APIData;

const symbols = APIData.symbols;
const strikeCounts = APIData.strikeCounts;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchOptionsData() {
  const tasks = [];
  const data = [];

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    for (let j = 0; j < strikeCounts.length; j++) {
      const strikeCount = strikeCounts[j];

      tasks.push(() =>
        fetchData(symbol, strikeCount)
          .then((response) => {
            if (!response) {
              throw new Error({
                status: error_code.API_ERROR,
                message: error_messages.API_ERROR,
              });
            }
            // console.log(`${symbol}-${strikeCount}:`, response.callOi);
            const volumes = GetVolume.getVolume(response.optionsChain);
            data.push({
              symbol: symbol,
              strikeCount: strikeCount,
              callOi: response.callOi,
              putOi: response.putOi,
              callVolume: volumes.call,
              putVolume: volumes.put,
              dummy: false,
            });
          })
          .catch((error) => {
            // console.error(`Error for ${symbol} - ${strikeCount}:`, error);
          })
      );
    }
  }

  // Process in batches of 10
  const BATCH_SIZE = 10;
  for (let i = 0; i < tasks.length; i += BATCH_SIZE) {
    const batch = tasks.slice(i, i + BATCH_SIZE).map((fn) => fn());
    await Promise.all(batch); // run 10 in parallel
    if (i + BATCH_SIZE < tasks.length) {
      await sleep(1500); // wait 1.5 seconds before next batch
    }
  }
  return data;
}

// how to fetch, store and export the data
async function fetchAndStoreOptionsData() {
  const data = fetchOptionsData();
  return data;
}

// Call the function and log the data length
// (async () => {
//   const response = await fetchAndStoreOptionsData();
//   console.log("Response:", response.length);
// })();

module.exports = { fetchAndStoreOptionsData }; // Export the function and data array
