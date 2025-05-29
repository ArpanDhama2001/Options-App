const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controllers");
const tokenRoutes = require("./token");
const optionsRoutes = require("./optionsData");

router.get("/info", InfoController.info);
router.use("/token", tokenRoutes);
router.use("/options", optionsRoutes);

module.exports = router;
