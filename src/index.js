const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

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

app.use("/api", apiRoutes);
app.use("/options/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is listening on port ${ServerConfig.PORT}`);
});
