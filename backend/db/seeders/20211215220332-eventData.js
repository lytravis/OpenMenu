"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          name: "Event 1",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 2,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event 2",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 3,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event 3",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 1,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event 4",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 4,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event 5",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 5,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event 6",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 6,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event 7",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 7,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event 8",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 8,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event 9",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 9,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event 10",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: 10,
          typeId: 1,
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
    return queryInterface.bulkDelete("Events", null, {});
  },
};
