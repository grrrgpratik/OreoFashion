const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("You are visiting login");
});

app.get("/signout", (req, res) => {
  res.send("You are sign out");
});

app.get("/hitesh", (req, res) => {
  res.send("Hey Users Hitesh users Instagram");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
