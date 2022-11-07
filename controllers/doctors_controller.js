const doctorsCollection = require("../models/doctors");
const jwt = require("jsonwebtoken");

module.exports.signUp = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.status(401).json({ msg: " both passwords doesn't match" });
  }
  try {
    let Doctor = await doctorsCollection.findOne({ email: req.body.email });
    if (Doctor) {
      return res.status(400).json({ msg: " User already exist" });
    } else {
      let newDoctor = await doctorsCollection.create(req.body);

      return res
        .status(201)
        .json({ msg: " new user created ", doctor: newDoctor });
    }
  } catch (error) {
    res.status(500).json({ msg: "internal sever error pls try again later" });
  }
};

module.exports.signIn = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  try {
    let Doctor = await doctorsCollection.findOne({ email });
    if (!Doctor) {
      return res.status(404).json({
        msg: " Doctors email cannot be found",
      });
    } else if (Doctor.password !== password) {
      return res.status(401).json({
        msg: " Doctors password doesn't match",
      });
    }
    let token = jwt.sign(
      { id: Doctor.id, email: Doctor.email },
      "bla bla bla",
      { expiresIn: "30d" }
    );
    return res.status(200).json({
      token,
      msg: " User found and Token generated",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error Try Again Later" });
  }
};
