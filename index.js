const express = require("express");

const pool = require("./db.js");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM comments");
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
