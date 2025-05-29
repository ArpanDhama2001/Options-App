const OptionsData = require("../models/optionsData");
const { fetchAndStoreOptionsData } = require("../api/batchData");
const { GenerateDummyData, APIData } = require("../utils");
const { error_code, error_messages } = APIData;

const savePeriodicData = async () => {
  try {
    let flag = false;
    // let timestamp = Date.now();
    let data = await fetchAndStoreOptionsData();

    console.log("Aggregated Data Length:", data.length);

    if (data.length === 0) {
      data = GenerateDummyData();
      flag = true;
    }

    await OptionsData.insertMany(data);
    console.log(data.length, "data saved successfully");

    if (flag) {
      console.log("No data fetched, using dummy data instead.");
      const err = new Error(error_messages.NO_DATA);
      err.status = error_code.NO_DATA;
      throw err; // this will now be caught below
    }
  } catch (error) {
    console.error("Error saving periodic data:", error);
  }
};

const getDelayedData = async (symbol, strikeCount, delayTime) => {
  try {
    const fiveMinutesAgo = new Date(Date.now() - delayTime * 60 * 1000);
    const startWindow = new Date(fiveMinutesAgo.getTime() - 5000); // 5 seconds before
    const endWindow = new Date(fiveMinutesAgo.getTime() + 5000); // 5 seconds after

    const response = await OptionsData.findOne({
      symbol,
      strikeCount,
      timestamp: {
        $gte: startWindow,
        $lte: endWindow,
      },
    }).sort({ timestamp: -1 });
    if (!response) {
      const err = new Error(error_messages.NO_DELAYED_DATA);
      err.status = error_code.NO_DELAYED_DATA;
      throw err;
    }
    if (response.dummy) {
      const err = new Error(error_messages.NO_DATA);
      err.status = error_code.NO_DATA;
      throw err;
    }
    return response;
  } catch (error) {
    if (error.status === error_code.NO_DELAYED_DATA) {
      throw error; // rethrow to be handled by the caller
    }
    if (error.status === error_code.NO_DATA) {
      throw error; // rethrow to be handled by the caller
    }
    // Log the error and throw a generic API error
    console.error("Error fetching delayed data:", error);
    throw new Error({
      status: error_code.API_ERROR,
      message: error_messages.API_ERROR,
    });
  }
};

module.exports = {
  savePeriodicData,
  getDelayedData,
};
