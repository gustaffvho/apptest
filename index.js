const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World! all");
});

app.listen(process.env.PORT || 80);
module.exports = app