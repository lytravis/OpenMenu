"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      eventId: { type: DataTypes.INTEGER, allowNull: false },
      comment: { type: DataTypes.STRING(255), allowNull: false },
      food: { type: DataTypes.INTEGER, allowNull: false },
      experience: { type: DataTypes.INTEGER, allowNull: false },
      cleanliness: { type: DataTypes.INTEGER, allowNull: false },
      accuracy: { type: DataTypes.INTEGER, allowNull: false },
      value: { type: DataTypes.INTEGER, allowNull: false },
      communication: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Event, { foreignKey: "eventId" });
  };
  return Review;
};
