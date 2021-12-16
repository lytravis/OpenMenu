"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model:"Users"}
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model:"Events"}
      },
      comment: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      food: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      experience: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cleanliness: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      accuracy: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      value: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      communication: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),

      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Reviews");
  },
};
