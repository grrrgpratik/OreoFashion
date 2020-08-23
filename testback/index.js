const express = require("express");
const app = express();
const port = 3000;

const admin = (req, res) => {
  res.send("This is admin dashboard");
};

const isAdmin = (req, res, next) => {
  console.log("isAdmin is running");
  next();
};
const isLoggedIn = (req, res, next) => {
  console.log("Logged In");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/admin", isLoggedIn, isAdmin, admin);

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
