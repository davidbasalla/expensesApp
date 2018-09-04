"use strict";
module.exports = (sequelize, DataTypes) => {
  var Expense = sequelize.define("Expense", {
    name: DataTypes.STRING
  });

  return Expense;
};
