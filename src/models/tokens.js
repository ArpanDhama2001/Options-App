const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    accessToken: String,
    refreshToken: String,
    accessTokenExpiresAt: Date,
    refreshTokenExpiresAt: Date,
    status: {
      type: String,
      enum: ["active", "expired"],
      default: "active",
    },
  },
  { timestamps: true }
);

tokenSchema.index({ refreshTokenExpiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model("Token", tokenSchema);
