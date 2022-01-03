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
          comment: "This was so much fun!",
          food: 40,
          experience: 60,
          cleanliness: 80,
          accuracy: 60,
          value: 60,
          communication: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 3,
          comment: "The food was great",
          food: 100,
          experience: 100,
          cleanliness: 80,
          accuracy: 80,
          value: 80,
          communication: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 4,
          comment: "What a great experience",
          food: 60,
          experience: 40,
          cleanliness: 60,
          accuracy: 80,
          value: 40,
          communication: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 5,
          comment: "I'm coming back for round 2",
          food: 100,
          experience: 60,
          cleanliness: 40,
          accuracy: 80,
          value: 60,
          communication: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          eventId: 2,
          comment: "Can't wait to come back",
          food: 80,
          experience: 80,
          cleanliness: 80,
          accuracy: 80,
          value: 80,
          communication: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          eventId: 4,
          comment: "I was so thrilled for this",
          food:  100,
          experience:  100,
          cleanliness:  100,
          accuracy: 80,
          value: 80,
          communication: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          eventId: 1,
          comment: "He provided a magical and memorable experience. It was an incredible meal. He was also very respectful of or family. It was an amazing experience. I would recommend him for any event someone was thinking of hosting.",
          food: 100,
          experience: 100,
          cleanliness: 100,
          accuracy: 100,
          value: 100,
          communication: 4100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          eventId: 1,
          comment: "He cooked up a magical tri tip and chicken and rolled with the punches with the timing of our group. He was really easy going, food was delicious. 100% recommend!",
          food: 100,
          experience: 100,
          cleanliness: 80,
          accuracy: 100,
          value: 100,
          communication: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          eventId: 1,
          comment: "We really enjoyed this experience. It was a great time with friends and the food was outstanding. I highly recommend this for others the cost is reasonable.",
          food: 100,
          experience: 80,
          cleanliness: 100,
          accuracy: 100,
          value: 100,
          communication: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          eventId: 1,
          comment: "A special day that I’d love to share and take with me everywhere I go, I will definitely be booking again and seeing what other menus she’ll be making in the future",
          food: 100,
          experience: 100,
          cleanliness: 100,
          accuracy: 100,
          value: 100,
          communication: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          eventId: 1,
          comment: " He is an A+ conversationalist and has the wildest stories. His food was expertly prepared, presented and was very delicious. Like brining a 5 star restaurant to your front steps! Thanks so much for the experience!",
          food: 100,
          experience: 80,
          cleanliness: 100,
          accuracy: 100,
          value: 100,
          communication: 100,
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
