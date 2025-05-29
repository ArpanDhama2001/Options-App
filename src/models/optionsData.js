const mongoose = require("mongoose");

const OptionsDataSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  strikeCount: { type: Number, required: true },
  callOi: { type: Number, required: true },
  putOi: { type: Number, required: true },
  callVolume: { type: Number, required: true },
  putVolume: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now, index: true },
  dummy: { type: Boolean, default: false },
});

module.exports = mongoose.model("OptionsData", OptionsDataSchema);
