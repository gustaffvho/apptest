const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World! El gato volcan casa ");
});

app.listen(process.env.PORT || 8080);
module.exports = app