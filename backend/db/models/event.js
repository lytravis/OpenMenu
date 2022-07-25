"use strict";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      name: { type: DataTypes.STRING(100), allowNull: false },
      description: { type: DataTypes.STRING(255), allowNull: false },
      address: { type: DataTypes.STRING(50), allowNull: false },
      city: { type: DataTypes.STRING(50), allowNull: false },
      state: { type: DataTypes.STRING(50), allowNull: false },
      zipCode: { type: DataTypes.INTEGER, allowNull: false },
      avgCost: { type: DataTypes.STRING(5), allowNull: false },
      latitude: { type: DataTypes.DECIMAL, allowNull: true },
      longitude: { type: DataTypes.DECIMAL, allowNull: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      typeId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Event.associate = function (models) {
    // associations can be defined here
    Event.hasMany(models.Review, {
      foreignKey: "eventId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Event.hasMany(models.Image, {
      foreignKey: "eventId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Event.hasMany(models.Reservation, {
      foreignKey: "eventId",
      onDelete: "CASCADE",
      hooks: true,
    });

    Event.belongsTo(models.User, { foreignKey: "userId" });
    Event.belongsTo(models.Type, { foreignKey: "typeId" });
  };
  return Event;
};
