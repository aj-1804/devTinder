const express = require("express");

// creating the instance of the application
const app = express();


// if any incoming request is coming, we are handling it here
/*
app.use((req, res) => {
  res.send("Hello from the server!");
})
*/



// this will match all the http method API calls to /test
// app.use("/test", (req, res) => {
//   res.send("Test hai ye");
// })

// this will only match GET call to /user
app.get("/test", (req, res) => {
  res.send("Hello from the server!");
})

app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello");
})

// app.use("/", (req, res) => {
//   res.send("Namasate Amit");
// })

// SOME ROUTING TECHNIQUES - old :

// using ?

// b is optional - means it will work for /abc, /ac

// app.get("/ab?c", (req, res) => {
//   res.send("ABC hi kehde ?");
// })

// bc is optional

// app.get("/a(bc)?d", (req, res) => {
//   res.send("ABC hi kehde ?");
// })

// using +

// we can use multiple b's - means it will work for /abc, /abbc, /abbbbc

// app.get("/ab+c", (req, res) => {
//   res.send("ABC hi kehde +");
// })

// using *

// we can use anything in place of * - means it will work for /abcd, /abxyzcd, /ab123cd

// app.get("/ab*cd", (req, res) => {
//   res.send("ABC hi kehde +");
// })

// REGEX - will work for any string including a 

app.get(/a/, (req, res) => {
  res.send({ firstName: "Amit", lastName: "Jha"});
})

// REGEX - will work for any string ending with fly

app.get(/.*fly$/, (req, res) => {
  res.send({ firstName: "Fly", lastName: "It is"});
})

// taking info from url

// http://localhost:3000/user?userId=101
// multiple values
// http://localhost:3000/user?userId=101&password=Hello

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Amit", lastName: "Jha"});
})

// handling dynamic APIs

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Amit", lastName: "Jha"});
})


app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...")
}) 