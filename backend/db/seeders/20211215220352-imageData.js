"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824216855642112/BakedStuffedLobster-TheSpruce_DianaChistruga-3fcb6301491a4be193ecf40d0735e8d1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824217283469382/beef_tartare__rqe1pk.webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824217619021844/bonefish-seafood-platter.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824217887473724/download.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824219040907284/WeddingPlatedDinner.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/ae71ee49-dc12-4232-bcd3-ed6f59d0ad8d.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/83b203b9-f0b4-4070-ae38-c10628bef92f.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/f9a3edd6-10f4-46ec-bbe3-06949f408178.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/6a7f2f47-c406-4513-a65e-e398b24244e5.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: "https://cdn.discordapp.com/attachments/920377762068447282/920824218772443226/sasdsa.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: "https://natashaskitchen.com/wp-content/uploads/2021/08/Gnocchi-SQ.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: "https://a0.muscache.com/im/pictures/c3656a7e-29f4-4bee-b822-6f438e277ab8.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: "https://a0.muscache.com/im/pictures/a906a5db-b6c5-4ef2-8315-debeb371c546.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1670347-media_library/original/02442240-aa79-44a1-a64d-aadf6de171b6.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1670347-media_library/original/e932e565-e5be-473b-a886-1f2bbc8bf73c.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-973849-media_library/original/b138cadf-251d-4798-9f1c-cfb471f24a63.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/f9a3edd6-10f4-46ec-bbe3-06949f408178.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-973849-media_library/original/901a2f0e-55a8-4621-9db7-b2c9f212bd64.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-973849-media_library/original/1a2029bb-5a1b-488d-aff3-209281a6ac8e.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-poster/original/693acbbf-c67d-4351-9967-747362e9c9c9.jpeg?im_w=960",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-media_library/original/38dcb45a-5675-4d67-b652-dfba99da9f58.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-media_library/original/87f9227c-440c-4ab0-bfe5-0495815c28ac.png?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-media_library/original/e7908363-a2bd-462d-9e1e-449d29cadd1b.png?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-media_library/original/c9dd23f1-a6da-4a25-b01f-676b187db8f9.png?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fine-dining-grilled-sea-bass-royalty-free-image-1626951675.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://i.insider.com/5c052700d78fe042d2369357?width=700",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://media-cdn.tripadvisor.com/media/photo-s/14/6a/17/5f/rice-cakes-with-veggies.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpFpJYKBJxN7OrLk6dQrwHl5Y7A9J7dmDBnrVbXwmbP3oJ_-ywYgVB4a1-7RBzb7L4vk&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpbQCYG0Re5_4n1yZtY8eYuHzmMd-ja3d7nKIqDYD0sTLKgt09T-UN_Oecl7uv5U0cKk&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/8e9b91f8-66b2-4b9c-a186-252ec81b92c8.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/2262915c-568c-4873-8e86-b16938e845b5.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/c130810d-4480-42dd-8af1-fea72140e965.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/2f7de6aa-56ba-4ea9-9001-a8ae6ff7fa69.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/ef10ce4f-f9b4-44b6-afdb-375d2a33852c.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1f-PrIYM1mr0-EPUW6i1xAeWySQ_K7U2Nw&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0D4dwm3k10qg_PwmVqySYJ4bzzL7V6qvbMprQ8Zw6vfUdoyTIt7BOP8A5Qksik8k8SeA&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/06/fine-dining-restaurants-in-Singapore-Art-900x643.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR808yQ89fPICr1QXjME6JbuDvkrnPbBcF60P92zgqxnu67zmg3ngfPQiUTf72Qi8go1sw&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0L-52jVv2RPLGErEPy6NpU3NrC_EDdHKST_zu5_jU42AJ_ZNHs94PniQdycW9f-FO9RY&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: "https://elitetraveler.com/wp-content/uploads/2020/03/londonstock1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: "https://i1.wp.com/berriesandspice.com/wp-content/uploads/2018/08/Berries-and-Spice-How-to-plate-dishes-worthy-of-a-fine-dining-restaurant-the-complete-guide-23.jpg?fit=960%2C640&ssl=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/06/fine-dining-restaurants-in-Singapore-Art-900x643.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: "https://i2.wp.com/berriesandspice.com/wp-content/uploads/2018/08/Berries-and-Spice-How-to-plate-dishes-worthy-of-a-fine-dining-restaurant-the-complete-guide-19.jpg?resize=1160%2C773&ssl=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: "https://assets3.thrillist.com/v1/image/1612230/828x610/flatten;crop;webp=auto;jpeg_quality=70",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWUrWjzJwjpk3BWV1HD20xrdw2HT_RDuZCw&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: "https://i1.wp.com/berriesandspice.com/wp-content/uploads/2018/08/Berries-and-Spice-How-to-plate-dishes-worthy-of-a-fine-dining-restaurant-the-complete-guide-23.jpg?fit=960%2C640&ssl=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: "https://fnbreport.ph/wp-content/uploads/2021/08/Is-fine-dining-dead-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/03/m6_07-ed.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: "http://www.elitetraveler.com/wp-content/uploads/2017/11/esplanadezagreb-Zinfandels-462x346.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: "https://i0.wp.com/www.godsavethepoints.com/wp-content/uploads/2019/08/zgerinc-reglakrl-alma-textrkkal-s-karalbval.jpg?ssl=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorDEf37udgpAgRCrSqVY3Raf1W0siL3O2wB5-Y0hZ7BUYWX0CCvvncEk-We-bWeTklWE&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: "https://eu-assets.simpleview-europe.com/isleofwight2015/imageresizer/?image=%2Fdmsimgs%2FTRH_May17_13resize_662384170.jpg&action=ProductListMain",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: "https://i.insider.com/59722755c50c29ad008b5ba9?width=750&format=jpeg&auto=webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: "https://i.insider.com/5c053a9f4b676b46de1438b3?width=1200&format=jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: "https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/010221142300/billboard/park-chinois-chinese-new-year.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: "https://content.fortune.com/wp-content/uploads/2019/08/HDL_1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: "https://media.istockphoto.com/photos/bowls-with-japanese-food-picture-id1042391774?k=20&m=1042391774&s=612x612&w=0&h=zlX5EKZ5ra8cl5IyqOk32HYc4Gg94MssJ-hMPj3eoEE=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93OpbCpt5DGjYoz7lQwsP1vX8yZ8YNuX1iQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: "https://cumbriafoodie.files.wordpress.com/2019/01/p1250155.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Images", null, {});
  },
};
