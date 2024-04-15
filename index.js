import express from "express";

const app = express();

app.listen(8000, (req, res) => {
  console.log("Server started on http://localhost:8000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
