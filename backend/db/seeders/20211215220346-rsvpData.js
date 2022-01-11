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
          checkIn: new Date("2022-02-05T00:00:00.000+20:00").toLocaleString(
            "en-US",
            { timeZone: "America/Los_Angeles" }
          ),
          guests: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 2,
          checkIn: new Date("2022-02-15T00:00:00.000+20:00").toLocaleString(
            "en-US",
            { timeZone: "America/Los_Angeles" }
          ),
          guests: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 3,
          checkIn: new Date("2022-01-21T00:00:00.000+20:30").toLocaleString(
            "en-US",
            { timeZone: "America/Los_Angeles" }
          ),
          guests: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 4,
          checkIn: new Date("2022-02-01T00:00:00.000+19:00").toLocaleString(
            "en-US",
            { timeZone: "America/Los_Angeles" }
          ),
          guests: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 1,
          checkIn: new Date("2022-02-05T00:00:00.000+20:00").toLocaleString(
            "en-US",
            { timeZone: "America/Los_Angeles" }
          ),
          guests: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 2,
          checkIn: new Date("2022-02-15T00:00:00.000+20:00").toLocaleString(
            "en-US",
            { timeZone: "America/Los_Angeles" }
          ),
          guests: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 3,
          checkIn: new Date("2022-01-21T00:00:00.000+20:30").toLocaleString(
            "en-US",
            { timeZone: "America/Los_Angeles" }
          ),
          guests: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 4,
          checkIn: new Date("2022-02-01T00:00:00.000+19:00").toLocaleString(
            "en-US",
            { timeZone: "America/Los_Angeles" }
          ),
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
