"use strict";
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      name: { type: DataTypes.STRING(50), allowNull: false },
    },
    {}
  );
  Type.associate = function (models) {
    // associations can be defined here
    Type.hasMany(models.Event, { foreignKey: "typeId" });
  };
  return Type;
};
