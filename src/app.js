const express = require("express");

// creating the instance of the application
const app = express();


// if any incoming request is coming, we are handling it here
/*
app.use((req, res) => {
  res.send("Hello from the server!");
})
*/

app.use("/test", (req, res) => {
  res.send("Test hai ye");
})

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...")
}) 