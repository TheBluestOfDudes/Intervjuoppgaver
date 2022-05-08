require("dotenv").config();
const handlers = require("./handlers");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

app.get("/", (req, res) => res.redirect("/all"));
app.get("/all", (req, res) => handlers.allHandler(req, res));
app.get("/id/:id", (req, res) => handlers.idHandler(req, res));
app.get("/coordinates", (req, res) => handlers.coordinatesHandler(req, res));
app.get("/coordinates/id/:id", (req, res) =>
  handlers.coordinatesHandler(req, res)
);

app.listen(port, () => console.log(`Listening on port ${port}..`));

module.exports;
