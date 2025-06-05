const express = require("express");
const { ServerConfig } = require("./config");
const { OptionsData, TokensRepo } = require("./repository");
const apiRoutes = require("./routes");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cron = require("node-cron");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Connect to MongoDB
const MONGO_URI = ServerConfig.MONGODB_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

cron.schedule("* 9-15 * * 1-5", async () => {
  await OptionsData.savePeriodicData();
});

cron.schedule(
  `0 8,8+${ServerConfig.ACCESS_TOKEN_EXPIRE_TIME} * * 1-5`,
  async () => {
    try {
      await TokensRepo.updateAccessToken();
      console.log("Access token updated successfully");
    } catch (error) {
      console.log("Error updating access token:", error);
    }
  }
);

// (async () => await OptionsData.savePeriodicData())();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is listening on port ${ServerConfig.PORT}`);
});
