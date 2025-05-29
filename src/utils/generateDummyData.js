const symbols = require("./enums").symbols;
const strikeCounts = require("./enums").strikeCounts;

function generateDummyData() {
  const dummyData = [];

  symbols.forEach((symbol) => {
    strikeCounts.forEach((strikeCount) => {
      dummyData.push({
        symbol,
        strikeCount,
        callOi: 0,
        putOi: 0,
        callVolume: 0,
        putVolume: 0,
        dummy: true, // Flag to indicate this is dummy data
      });
    });
  });

  return dummyData;
}

module.exports = generateDummyData;
