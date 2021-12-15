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
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "2",
          typeId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "3",
          typeId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "1",
          typeId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "4",
          typeId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "5",
          typeId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "6",
          typeId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "7",
          typeId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "8",
          typeId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "9",
          typeId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          description: "lorem ipson",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipcode: "90035",
          latitude: "34.0736",
          longtitude: "118.4004",
          userId: "10",
          typeId: "1",
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
