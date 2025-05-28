const express = require("express");
const router = express.Router();

const { AccessTokenController } = require("../../controllers");

router.post("/get-token", AccessTokenController.getAccessTokenController);
router.get("/use-token", AccessTokenController.setAccessTokenController);

module.exports = router;
