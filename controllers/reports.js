const AllReports = require("../models/report");

module.exports.filterStatus = async (req, res, next) => {
  const status = req.params.status;
  try {
    let allReports = await AllReports.find({ status });
    res.status(200).json({
      msg: "All the Report for asked status Are Found",
      status,
      allReports,
    });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error", err });
  }
};
