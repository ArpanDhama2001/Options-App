const express = require("express");
const { ServerConfig } = require("./config");
const { OptionsData } = require("./repository");
const apiRoutes = require("./routes");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cron = require("node-cron");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to MongoDB
const MONGO_URI = ServerConfig.MONGODB_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

cron.schedule("* * * * *", async () => {
  await OptionsData.savePeriodicData();
});

app.use("/api", apiRoutes);
app.use("/options/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is listening on port ${ServerConfig.PORT}`);
});
