var express = require("express");
var router = express.Router();

/* GET expenses listing. */
router.get("/", function(req, res, next) {
  res.json([
    {
      id: 1,
      name: "Shopping",
      amount: "9.99"
    },
    {
      id: 2,
      name: "Cleaner",
      amount: "24.99"
    }
  ]);
});

module.exports = router;
