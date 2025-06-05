const express = require("express");
const router = express.Router();

const { AccessTokenController } = require("../../controllers");

router.post("/createToken", AccessTokenController.createAccessTokenController);
router.get("/getToken", AccessTokenController.getAccessTokenController);
router.get("/remainingTime", AccessTokenController.getRemainingTimeController);

module.exports = router;
