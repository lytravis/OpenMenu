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
          name: "Taste of Santa Monica with Private Chef",
          description:
            "Learn the secrets hidden within each dish, and enjoy a delicious multi-course meal. Get ready to discover the taste of Santa Monica without leaving your own dining room! I will arrive 90 minutes before your preferred dining time in order to begin",
          address: "225 Santa Monica Blvd ",
          city: "Santa Monica",
          state: "California",
          zipCode: "90401",
          // latitude: "34.0736",
          // longitude: "118.4004",
          userId: 2,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wait for Christmas cooking Pasta with Grandma",
          description:
            "Cook Pasta from scratch with grandma, let her share with you her culinary secrets and the traditional authentic Pasta technique. Listen to her stories and be ready to be involved in our community.",
          address: "Online",
          city: "N/A",
          state: "N/A",
          zipCode: "0",
          // latitude: "0",
          // longitude: "0",
          userId: 3,
          typeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Make Gnocchi and Ravioli at Home",
          description:
            "Do you want to eat original Gnocchi and Ravioli as if from a local Italian restaurant? Do you also want to try and make it on your own? Book your cooking experience with us! ",
          address: "911 Rodeo Hills",
          city: "N/A",
          state: "N/A",
          zipCode: "0",
          // latitude: "0",
          // longitude: "0",
          userId: 2,
          typeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "COOKING CLASS BASED ON CHOOSEN FILM/TV",
          description:
            "We will begin by reviewing the three-course menu I have curated based on the selected film or TV show. The menu will consist of an appetizer, an entree (with a side), and a desert.  ",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "0",
          // latitude: "34.0736",
          // longitude: "118.4004",
          userId: 4,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Enjoy your very own private chef experience at your place!",
          description:
            "Feel free to put your apron on and cook some of the dishes with me! I am eager to share with you the secrets behind my recipes and Santa Monica's local hidden treasures. Not in the mood? Well then lay down, relax, enjoy a few appetizers and allow me",
          address: "2811 Sunset Drive",
          city: "Hollywood Hills",
          state: "California",
          zipCode: "90015",
          // latitude: "34.0736",
          // longitude: "118.4004",
          userId: 1,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iron Chef cooks you a meal",
          description:
            "Our on-line cooking experience is: Great for Solo cuisine explorers, Families, Groups of Friends, Birthday Parties, Holiday Celebrations, Team-building & Corporate Events. It has already been rated with 5 stars by companies like Alphabet, Microsoft",
          address: "911 Rodeo Hills",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          // latitude: "34.0736",
          // longitude: "118.4004",
          userId: 1,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plant-Based Flavours in Los Angeles",
          description:
            "Learn the secrets hidden within each dish, and enjoy a delicious multi-course meal. Get ready to discover the taste of Los Angeles without leaving your own dining room!",
          address: "246 N Canon Dr",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90210",
          // latitude: "34.0736",
          // longitude: "118.4004",
          userId: 1,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Enjoy your very own private chef experience at your place!",
          description:
            "I will arrive 90 minutes before your preferred dining time in order to begin working my magic. I won't arrive empty-handed! No-no, I will show up at your doorstep equipped with every ingredient needed in order to prepare your meal.",
          address: " 9669 S Santa Monica Blvd",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          // latitude: "34.0736",
          // longitude: "118.4004",
          userId: 1,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Take a Chef has connected thousands of local chefs and guests in over 100 countries",
          description:
            "Feel free to put your apron on and cook some of the dishes with me! I am eager to share with you the secrets behind my recipes and Los Angeles' local hidden treasures. Not in the mood? Well then lay down, relax.",
          address: "468 N Bedford Dr",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90210",
          // latitude: "34.0736",
          // longitude: "118.4004",
          userId: 9,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Foodies 7-course meal",
          description:
            "Eat, share, drink, laugh, and explore Los Angeles' dining scene from your own table. Oh and don’t worry about tidying up, everything will be left spotless for you to continue to enjoy!",
          address: "400 N Canon Dr",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90035",
          // latitude: "34.0736",
          // longitude: "118.4004",
          userId: 10,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "A Royal Feast",
          description:
            "Take a trip around the world from the comfort of your kitchen. Learn about how the different tastes from South American and Asian cultures complement each other. To have a closer look at my menus, send me a direct message and I will send them your way!",
          address: "301 N Beverly Dr",
          city: "Beverly Hills",
          state: "California",
          zipCode: "90210",
          // latitude: "34.0736",
          // longitude: "118.4004",
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
