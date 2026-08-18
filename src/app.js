const express = require("express");
const app = express();

app.get("/user", (req, res, next) => {
  // Route Handler
  // res.send("Response!!");
  next();
}, (req, res) => {
  // Route Handler 2
  res.send("2nd Response!!!");
})

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...")
}) 