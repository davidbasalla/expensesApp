"use strict";
module.exports = (sequelize, DataTypes) => {
  var Expense = sequelize.define("Expense", {
    name: DataTypes.STRING,
    amount: DataTypes.STRING,
    date: DataTypes.DATE,
    person: DataTypes.STRING
  });

  return Expense;
};
