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
          userid: 1,
          eventId: 1,
          startTime: new Date(2021, 12, 11),
          endTime: new Date(2021, 12, 11),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userid: 1,
          eventId: 2,
          startTime: new Date(2021, 12, 12),
          endTime: new Date(2021, 12, 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userid: 1,
          eventId: 3,
          startTime: new Date(2021, 12, 1),
          endTime: new Date(2021, 12, 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userid: 2,
          eventId: 5,
          startTime: new Date(2021, 12, 2),
          endTime: new Date(2021, 12, 2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userid: 1,
          eventId: 4,
          startTime: new Date(2021, 12, 15),
          endTime: new Date(2021, 12, 15),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userid: 1,
          eventId: 6,
          startTime: new Date(2021, 12, 14),
          endTime: new Date(2021, 12, 14),
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
