var express = require("express");
var router = express.Router();
var models = require("../models");

/* GET expenses listing. */
router.get("/", function(req, res, next) {
  models.Expense.findAll().then(function(expenses) {
    res.json(
      expenses.map(e => {
        return {
          id: e.id,
          person: e.person,
          name: e.name,
          amount: e.amount,
          date: new Date(e.date).toLocaleDateString("en-GB")
        };
      })
    );
  });
});

module.exports = router;
