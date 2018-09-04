var express = require("express");
var router = express.Router();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("davidbasalla", "davidbasalla", "", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

/* GET expenses listing. */
router.get("/", function(req, res, next) {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });

  res.json([
    {
      id: 0,
      person: "Ana",
      name: "Shopping",
      amount: 9.99,
      date: "28/07/2018"
    },
    {
      id: 1,
      person: "Ana",
      name: "Cleaner",
      amount: 24.99,
      date: "01/08/2018"
    }
  ]);
});

module.exports = router;
