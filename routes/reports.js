const express = require("express");
const router = express.Router();
const controller = require("../controllers/reports");

router.get("/:status", controller.filterStatus);

module.exports = router;
