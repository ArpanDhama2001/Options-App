const express = require("express");
const router = express.Router();

const { OptionsDataController } = require("../../controllers");

router.post("/get-token", OptionsDataController.getAccessToken);
