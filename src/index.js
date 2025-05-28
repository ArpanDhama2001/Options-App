const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
app.use("/options/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is listening on port ${ServerConfig.PORT}`);
});
