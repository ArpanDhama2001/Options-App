const { fetchAndStoreOptionsData } = require("./batchData");

function getAggregatedData() {
  (async () => {
    const data = await fetchAndStoreOptionsData();
    console.log("Aggregated Data Length:", data);
  })();
}

module.exports = { getAggregatedData };
