const patientsCollection = require("../models/patients");
const AllReports = require("../models/report");

module.exports.register = async function (req, res, next) {
  let { name, mobile_no } = req.body;
  try {
    let patient = await patientsCollection.findOne({ mobile_no });
    if (patient) {
      return res
        .status(200)
        .json({ msg: " this patient already exist", patient });
    }
    let newPatient = await patientsCollection.create({
      name,
      mobile_no,
      doctor: req.doctorId,
    });
    return res
      .status(201)
      .json({ msg: "new patient created", patient: newPatient });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error Try Again Later" });
  }
};

module.exports.createReport = async (req, res, next) => {
  try {
    let patient = req.params.id;
    let patient_data = await patientsCollection.findById(patient);
    let { status } = req.body;
    let new_report = await AllReports.create({
      status,
      Date: new Date(),
      patient,
    });
    patient_data.reports.push(new_report._id);
    patient_data.save();
    return res.status(200).json({ msg: "new Rreport Created", new_report });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error", err });
  }
};

module.exports.allReport = async (req, res, next) => {
  try {
    let patient = req.params.id;
    let patient_data = await patientsCollection.findById(patient);
    patient_data = await patient_data.populate("reports");
    return res.status(200).json({
      msg: "All Reports Found",
      reports: patient_data.reports,
    });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error", err });
  }
};
