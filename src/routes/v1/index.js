const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controllers");
const tokenRoutes = require("./token");

router.get("/info", InfoController.info);
router.use("/token", tokenRoutes);

module.exports = router;
