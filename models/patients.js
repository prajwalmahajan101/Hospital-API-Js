const mongoose = require("mongoose");

const patientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: Number,
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctorsCollection",
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AllReports",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//name of our collection in database
const patientsCollection = mongoose.model("patientsCollection", patientsSchema);

module.exports = patientsCollection;
