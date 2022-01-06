"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reservations",
      [
        {
          userId: 1,
          eventId: 1,
          checkIn: new Date(2022, 1, 5, 20, 0, 0),
          guests: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 2,
          checkIn: new Date(2022, 1, 15, 19, 0, 0),
          guests: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 3,
          checkIn: new Date(2022, 1, 21, 20, 0, 0),
          guests: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 4,
          checkIn: new Date(2022, 1, 19, 20, 0, 0),
          guests: 4,
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
    return queryInterface.bulkDelete("Reservations", null, {});
  },
};
