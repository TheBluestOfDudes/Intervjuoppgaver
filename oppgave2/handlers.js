const { Pool, Client } = require("pg");
const credentials = {
  user: "postgres",
  host: process.env.HOST,
  database: "produksjonsplass",
  password: process.env.DBPASS,
  port: process.env.DBPORT,
};
function allHandler(req, res) {
  const pool = new Pool(credentials);
  pool
    .query("SELECT * FROM produksjonsplass ORDER BY produksjonsplassid")
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.log(err.stack);
      res.send("Failed to connect to database");
    });
  pool.end();
}

function idHandler(req, res) {
  const pool = new Pool(credentials);
  pool
    .query(
      "SELECT * FROM produksjonsplass WHERE produksjonsplassid = $1::int",
      [req.params.id]
    )
    .then((result) => {
      result.rows.length > 0
        ? res.json(result.rows)
        : res.send("No item with that id");
    })
    .catch((err) => {
      console.log(err.stack);
      res.send("Failed to connect to database");
    });
  pool.end();
}

function coordinatesHandler(req, res) {
  const pool = new Pool(credentials);
  if (Object.keys(req.params).length > 0) {
    pool
      .query(
        "SELECT produksjonsplassid, koordinater, koordinatsystem FROM produksjonsplass WHERE produksjonsplassid = $1::int",
        [req.params.id]
      )
      .then((result) => {
        result.rows.length > 0
          ? res.json(result.rows)
          : res.send("No item with that id");
      })
      .catch((err) => {
        console.log(err.stack);
        res.send("Failed to connect to database");
      });
  } else {
    pool
      .query(
        "SELECT produksjonsplassid, koordinater, koordinatsystem FROM produksjonsplass ORDER BY produksjonsplassid"
      )
      .then((result) => res.json(result.rows))
      .catch((err) => {
        console.log(err.stack);
        res.send("Failed to connect to database");
      });
  }
  pool.end();
}

module.exports = {
  allHandler: allHandler,
  idHandler: idHandler,
  coordinatesHandler: coordinatesHandler,
};
