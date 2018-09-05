"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.addColumn("Expenses", "amount", Sequelize.STRING),
      await queryInterface.addColumn("Expenses", "person", Sequelize.STRING),
      await queryInterface.addColumn("Expenses", "date", Sequelize.DATE)
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.removeColumn("Expenses", "amount"),
      await queryInterface.removeColumn("Expenses", "person"),
      await queryInterface.removeColumn("Expenses", "date")
    ];
  }
};
