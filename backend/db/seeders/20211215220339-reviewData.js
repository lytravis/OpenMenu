"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          eventId: 2,
          comment: "this was fun",
          food: 5,
          experience: 5,
          cleanliness: 4,
          accuracy: 5,
          value: 5,
          communication: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 3,
          comment: "this was fun",
          food: 5,
          experience: 5,
          cleanliness: 4,
          accuracy: 5,
          value: 5,
          communication: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 4,
          comment: "this was fun",
          food: 5,
          experience: 5,
          cleanliness: 4,
          accuracy: 5,
          value: 5,
          communication: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 5,
          comment: "this was fun",
          food: 5,
          experience: 5,
          cleanliness: 4,
          accuracy: 5,
          value: 5,
          communication: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          eventId: 2,
          comment: "this was fun",
          food: 5,
          experience: 5,
          cleanliness: 4,
          accuracy: 5,
          value: 5,
          communication: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          eventId: 4,
          comment: "this was fun",
          food: 5,
          experience: 5,
          cleanliness: 4,
          accuracy: 5,
          value: 5,
          communication: 4,
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
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
