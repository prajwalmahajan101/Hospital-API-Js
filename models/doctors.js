const mongoose = require("mongoose");

const doctorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//name of our collection in database
const doctorsCollection = mongoose.model("doctorsCollection", doctorsSchema);

module.exports = doctorsCollection;
