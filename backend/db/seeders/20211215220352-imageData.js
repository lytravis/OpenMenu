"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824216855642112/BakedStuffedLobster-TheSpruce_DianaChistruga-3fcb6301491a4be193ecf40d0735e8d1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824217283469382/beef_tartare__rqe1pk.webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824217619021844/bonefish-seafood-platter.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824217887473724/download.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824218126544916/images.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824218428514314/istockphoto-1177099950-612x612.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824218772443226/sasdsa.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824219040907284/WeddingPlatedDinner.jpg",
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
    return queryInterface.bulkDelete("Images", null, {});
  },
};
