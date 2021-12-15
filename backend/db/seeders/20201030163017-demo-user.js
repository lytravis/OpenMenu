"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          firstName: "Demo",
          lastName: "User",
          profilePic:
            "https://res.cloudinary.com/dsxwhuvin/image/upload/v1639606458/00xp-ratatouille-mediumSquareAt3X_tj9vgp.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "susur@gmail.com",
          firstName: "Susur",
          lastName: "Lee",
          profilePic:
            "https://res.cloudinary.com/dsxwhuvin/image/upload/v1639606202/ChefProfile_SusurLee_n_lg_s9mujs.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "gordon@gmail.com",
          firstName: "Gordon",
          lastName: "Ramsay",
          profilePic:
            "https://res.cloudinary.com/dsxwhuvin/image/upload/v1639606292/uejo4dukwpzy5rpcskji.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "anthony@gmail.com",
          firstName: "Anythony",
          lastName: "Bourdain",
          profilePic:
            "https://res.cloudinary.com/dsxwhuvin/image/upload/v1639606411/1dd5f8781cc9ac776ad178687be906abfe-08-anthony-bourdain-2.rsquare.w700_kwcuc3.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "wolfgang@gmail.com",
          firstName: "Wolfgang",
          lastName: "Puck",
          profilePic:
            "https://res.cloudinary.com/dsxwhuvin/image/upload/v1639606533/2010_01_puck-thumb.0_ztctap.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jamie@gmail.com",
          firstName: "Jamie",
          lastName: "Oliver",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920803239518154823/bZay1J9F_400x400.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "emeril@gmail.com",
          firstName: "Emeril",
          lastName: "Lagasse",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920803239518154823/bZay1J9F_400x400.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "rachel@gmail.com",
          firstName: "Rachel",
          lastName: "Ray",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920803240117960724/gettyimages-123109227-copy.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "thomas@gmail.com",
          firstName: "Thomas",
          lastName: "Keller",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920803240587694120/tk.com_tk_portrait.biography3_0.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "giada@gmail.com",
          firstName: "Giada",
          lastName: "De Laurentiis",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920803240369614848/landscape-1500665833-delish-giada-de-laurentiis-cooking.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "guy@gmail.com",
          firstName: "Guy",
          lastName: "Fieri",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920805063730024448/1531174403377.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "dchang@gmail.com",
          firstName: "David",
          lastName: "Chang",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920805064086536252/im-220133.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "rchoi@gmail.com",
          firstName: "Roy",
          lastName: "Choi",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920805064656977920/Roy_970.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jono@gmail.com",
          firstName: "Jiro",
          lastName: "Ono",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920805064988323860/images.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "nobu@gmail.com",
          firstName: "Nobu",
          lastName: "Matsuhisa",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920805065382563910/nobu-matsuhisa.0.0.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jono@gmail.com",
          firstName: "Jiro",
          lastName: "Ono",
          profilePic:
            "https://res.cloudinary.com/dsxwhuvin/image/upload/v1639606292/uejo4dukwpzy5rpcskji.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jono@gmail.com",
          firstName: "Jiro",
          lastName: "Ono",
          profilePic:
            "https://res.cloudinary.com/dsxwhuvin/image/upload/v1639606292/uejo4dukwpzy5rpcskji.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "masaharu@gmail.com",
          firstName: "Masaharu",
          lastName: "Morimoto",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920809879445307412/masamorimoto.0.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jfav@gmail.com",
          firstName: "Jon",
          lastName: "Favreau",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920809879826997328/chef-jon-favreau-in-chef-movie-8.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "yoshikazu@gmail.com",
          firstName: "Yoshikazu",
          lastName: "Ono",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920809880099622922/20150913_181542.png",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "masa@gmail.com",
          firstName: "Masa",
          lastName: "Takayama",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920809880456155176/447981e15a2642e78fdf999d065f05c5_Masa.png",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "mPena@gmail.com",
          firstName: "Michael",
          lastName: "Pena",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920809880842018876/Michael_Pena_2014.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "mSanchez@gmail.com",
          firstName: "Milo",
          lastName: "Sanchez",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920809881743785984/666957.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "mLopez@gmail.com",
          firstName: "Michelle",
          lastName: "Lopez",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920809882305851493/59ff553673d9a7d7f4166c0aaa099699.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "akaka@gmail.com",
          firstName: "Ashley",
          lastName: "Lee",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920809882670731304/istockphoto-1194465593-612x612.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "alo@gmail.com",
          firstName: "Alex",
          lastName: "Tran",
          profilePic:
            "https://cdn.discordapp.com/attachments/920377762068447282/920809883027263488/2299fb7caf07e0df716fb7c0db322f43.jpg",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};
