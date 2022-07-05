const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/script.js", (req, res) => {
   res.sendFile(path.join(__dirname + "/scripts/script.js"));
});

app.get("/style.css", (req, res) => {
   res.sendFile(path.join(__dirname + "/css/style.css"));
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
