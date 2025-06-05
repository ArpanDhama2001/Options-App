const express = require("express");
const router = express.Router();

const { AccessTokenController } = require("../../controllers");

router.post("/getToken", AccessTokenController.getAccessTokenController);
router.get("/remainingTime", AccessTokenController.getRemainingTimeController);

module.exports = router;
