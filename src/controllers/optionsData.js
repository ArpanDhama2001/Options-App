const { OptionsData } = require("../repository");

/**
 * Get options data.
 * GET: http://localhost:3000/api/v1/options/get-options-data
 * req.query should contain:
 * - symbol: The stock symbol (e.g., "NSE:RELIANCE-EQ")
 * - strikeCount: The number of strikes to fetch
 * - time: The time in minutes for which the data is requested
 * @returns Data for the specified symbol and strike count for time minutes ago.
 * @throws 400 if required parameters are missing
 */
const getOptionsData = async (req, res) => {
  try {
    const { symbol, strikeCount, time } = req.query;
    if (!symbol || !strikeCount || !time) {
      return res
        .status(400)
        .json({ error: "symbol, strikeCount, and time are required" });
    }
    const data = await OptionsData.getDelayedData(
      symbol,
      parseInt(strikeCount),
      parseInt(time)
    );
    if (!data) {
      return res
        .status(404)
        .json({ error: "No data found for the given parameters" });
    }
    res.status(200).json(data);
  } catch (error) {
    if (error.status === "NO_DATA") {
      return res
        .status(404)
        .json({ "error.status": error.status, message: error.message });
    }
    if (error.status === "NO_DELAYED_DATA") {
      return res
        .status(404)
        .json({ "error.status": error.status, message: error.message });
    }
    console.error("Error fetching options data:", error);
    res.status(500).json({
      error: "Internal server error while fetching options data",
    });
  }
};

/**
 * Delete all options data.
 * DELETE: http://localhost:3000/api/v1/options
 * @returns Success message if data is deleted
 * @throws 500 if there is an error during deletion
 */

const deleteAllData = async (req, res) => {
  try {
    await OptionsData.deleteAll();
    res.status(200).json({ message: "All data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getOptionsData,
  deleteAllData,
};
