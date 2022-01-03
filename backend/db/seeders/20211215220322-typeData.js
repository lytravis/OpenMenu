"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Types",
      [
        {
          name: "Cooking Lession",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Celebrity Chef",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Online",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Food Truck",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Food Vendor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cater Service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Desert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Unique",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Budget Meals",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Types", null, {});
  },
};
