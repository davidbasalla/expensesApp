"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Expenses",
      [
        {
          name: "Cleaning",
          person: "Ana",
          date: "2018-10-01",
          amount: "30",
          createdAt: Sequelize.fn("NOW"),
          updatedAt: Sequelize.fn("NOW")
        },
        {
          name: "Thames Water",
          person: "David",
          date: "2018-09-20",
          amount: "19.99",
          createdAt: Sequelize.fn("NOW"),
          updatedAt: Sequelize.fn("NOW")
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Expenses", null, {});
  }
};
