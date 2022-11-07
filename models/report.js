// here we'll create report

const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    Date: {
      type: Date,
      required: true,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patientsCollection",
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// lets give name to our collection

const AllReports = mongoose.model("AllReports", reportSchema);

module.exports = AllReports;
