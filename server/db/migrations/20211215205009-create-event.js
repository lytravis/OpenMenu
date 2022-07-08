'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      avgCost: {
        allowNull: false,
        type: Sequelize.STRING(5),
      },
      // latitude: {
      //   allowNull: true,
      //   type: Sequelize.DECIMAL,
      // },
      // longitude: {
      //   allowNull: true,
      //   type: Sequelize.DECIMAL,
      // },
      userId: {
        allowNull: false,
        references: { model: 'Users' },
        type: Sequelize.INTEGER,
      },
      typeId: {
        allowNull: false,
        references: { model: 'Types' },
        type: Sequelize.INTEGER,
      },
      tagId: {
        allowNull: false,
        references: { model: 'Tags' },
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  },
};
