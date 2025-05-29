const express = require("express");
const router = express.Router();

const { OptionsDataController } = require("../../controllers");

router.get("/get-options-data", OptionsDataController.getOptionsData);
router.delete("/", OptionsDataController.deleteAllData);

module.exports = router;
