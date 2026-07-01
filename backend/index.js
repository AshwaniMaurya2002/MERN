import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO ");
});

app.get("/login", (req, res) => {
  res.send("Login ");
});
app.get("/signup", (req, res) => {
  res.send("Signup ");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
