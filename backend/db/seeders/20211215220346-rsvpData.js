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
          startDate: "Fri, December 10, 2021",
          endDate: "Fri, December 10, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Sat, December 11, 2021",
          endDate: "Sat, December 11, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Sun, December 12, 2021",
          endDate: "Sun, December 12, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Mon, December 13, 2021",
          endDate: "Mon, December 13, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Tue, December 14, 2021",
          endDate: "Tue, December 14, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Wed, December 15, 2021",
          endDate: "Wed, December 15, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Thu, December 16, 2021",
          endDate: "Thu, December 16, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Fri, December 17, 2021",
          endDate: "Fri, December 17, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Sat, December 18, 2021",
          endDate: "Sat, December 18, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Wed, December 1, 2021",
          endDate: "Wed, December 1, 2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          startDate: "Thu, December 2, 2021",
          endDate: "Thu, December 2, 2021",
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
