'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Tags',
      [
        {
          name: 'Great For Brunch',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Neighborhood Gem',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Authentic',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Great For Outdoor Dining',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Fit For Foodies',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Good For Groups',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   name: 'Desert',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   name: 'Unique',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   name: 'Budget Meals',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
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
    return queryInterface.bulkDelete('Tags', null, {});
  },
};
