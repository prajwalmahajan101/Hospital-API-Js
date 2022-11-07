const express = require("express");
const router = express.Router();

patientsController = require("../controllers/patients_controller");

router.get("/:id/all_reports", patientsController.allReport);
router.post("/register", patientsController.register);
router.post("/:id/create_report", patientsController.createReport);

module.exports = router;
