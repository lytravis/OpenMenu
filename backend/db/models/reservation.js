"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      eventId: { type: DataTypes.INTEGER, allowNull: false },
      startDate: { type: DataTypes.STRING, allowNull: false },
      endDate: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Reservation.associate = function (models) {
    // associations can be defined here
    Reservation.belongsTo(models.User, { foreignKey: "userId" });
    Reservation.belongsTo(models.Event, { foreignKey: "eventId" });
  };
  return Reservation;
};
