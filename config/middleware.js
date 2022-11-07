const jwt = require("jsonwebtoken");

module.exports.auth = async (req, res, next) => {
  try {
    let header = req.headers.authorization;
    if (!header) {
      return res.status(401).json({ msg: "no authentication header found" });
    }
    if (header.split(" ").length !== 2) {
      return res.status(401).json({ msg: "token is not correct" });
    }
    let token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "token not provided" });
    }
    let payload = await jwt.verify(token, "bla bla bla");
    req.doctorId = payload.id;
    req.doctorEmail = payload.email;
    next();
  } catch (error) {
    return res.status(500).json({ msg: "Invalid token" });
  }
};
