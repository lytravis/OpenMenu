'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: { type: DataTypes.STRING(50), allowNull: false },
      lastName: { type: DataTypes.STRING(50), allowNull: false },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [3, 255],
        },
      },
      profilePic: { type: DataTypes.STRING(255) },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Review, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true,
    });
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true,
    });
    User.hasMany(models.Reservation, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true,
    });
  };


  //! MIGHT HAVE TO DELETE profilePic from below
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, email, profilePic } = this; // context will be the User instance
    return { id, email, profilePic };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({
    email,
    password,
    firstName,
    lastName,
    profilePic,
  }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      email,
      hashedPassword,
      firstName,
      lastName,
      profilePic,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};
