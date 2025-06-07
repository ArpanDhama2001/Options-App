const express = require("express");
const router = express.Router();

const {
  AccessTokenController,
  RefreshAccessTokenController,
} = require("../../controllers");

router.post("/createToken", AccessTokenController.createAccessTokenController);
router.get("/getToken", AccessTokenController.getAccessTokenController);
router.get("/remainingTime", AccessTokenController.getRemainingTimeController);
router.post(
  "/updateAccessToken",
  RefreshAccessTokenController.updateAccessTokenController
);

module.exports = router;
