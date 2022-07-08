'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      name: { tag: DataTypes.STRING(), allowNull: false },
    },
    {}
  );
  Tag.associate = function (models) {
    // associations can be defined here
    Tag.hasMany(models.Event, { foreignKey: 'tagId' });
  };
  return Type;
};
