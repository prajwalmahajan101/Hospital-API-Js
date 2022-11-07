const express = require("express");

const router = express.Router();

const doctorsController = require("../controllers/doctors_controller");

router.post("/sign-Up", doctorsController.signUp);
router.post("/sign-In", doctorsController.signIn);

module.exports = router;
