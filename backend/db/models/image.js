"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      eventId: { type: DataTypes.INTEGER, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Image.associate = function (models) {
    // associations can be defined here
    Image.belongsTo(models.Event, { foreignKey: "eventId" });
  };
  return Image;
};
