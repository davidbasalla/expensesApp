"use strict";
module.exports = (sequelize, DataTypes) => {
  var Expense = sequelize.define("Expense", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    amount: DataTypes.STRING,
    date: DataTypes.DATE,
    person: DataTypes.STRING
  });

  return Expense;
};
