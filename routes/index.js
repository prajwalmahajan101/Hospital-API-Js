const express = require("express");
const authMiddleware = require("../config/middleware").auth;
const router = express.Router();

router.get("/health", function (req, res) {
  res.status(200).json({ msg: "API is working fine" });
});

router.use("/doctors", require("./doctors"));
router.use("/patients", authMiddleware, require("./patients"));
router.use("/reports", authMiddleware, require("./reports"));

module.exports = router;
