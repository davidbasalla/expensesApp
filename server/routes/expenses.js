var express = require("express");
var router = express.Router();
var models = require("../models");

/* GET expenses listing. */
router.get("/", function(req, res, next) {
  models.User.findAll().then(function(users) {
    console.log("USERS:", users);
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
