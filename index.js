const express = require("express");
const app = express();
const port = 8001;
const db = require("./config/mongoose");

app.use(express.json());

app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log("error occured ");
  }

  console.log("Server is running at port", port);
});
