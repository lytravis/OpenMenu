'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Images',
      [
        {
          eventId: 1,
          url: 'https://cdn.discordapp.com/attachments/920377762068447282/920824216855642112/BakedStuffedLobster-TheSpruce_DianaChistruga-3fcb6301491a4be193ecf40d0735e8d1.jpg',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: 'https://cdn.discordapp.com/attachments/920377762068447282/920824217283469382/beef_tartare__rqe1pk.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: 'https://cdn.discordapp.com/attachments/920377762068447282/920824217619021844/bonefish-seafood-platter.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: 'https://cdn.discordapp.com/attachments/920377762068447282/920824217887473724/download.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 1,
          url: 'https://cdn.discordapp.com/attachments/920377762068447282/920824219040907284/WeddingPlatedDinner.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/ae71ee49-dc12-4232-bcd3-ed6f59d0ad8d.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/83b203b9-f0b4-4070-ae38-c10628bef92f.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/f9a3edd6-10f4-46ec-bbe3-06949f408178.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/6a7f2f47-c406-4513-a65e-e398b24244e5.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          url: 'https://cdn.discordapp.com/attachments/920377762068447282/920824218772443226/sasdsa.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Gnocchi-SQ.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: 'https://a0.muscache.com/im/pictures/c3656a7e-29f4-4bee-b822-6f438e277ab8.jpg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: 'https://a0.muscache.com/im/pictures/a906a5db-b6c5-4ef2-8315-debeb371c546.jpg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1670347-media_library/original/02442240-aa79-44a1-a64d-aadf6de171b6.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1670347-media_library/original/e932e565-e5be-473b-a886-1f2bbc8bf73c.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-973849-media_library/original/b138cadf-251d-4798-9f1c-cfb471f24a63.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/f9a3edd6-10f4-46ec-bbe3-06949f408178.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-973849-media_library/original/901a2f0e-55a8-4621-9db7-b2c9f212bd64.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 4,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-973849-media_library/original/1a2029bb-5a1b-488d-aff3-209281a6ac8e.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-poster/original/693acbbf-c67d-4351-9967-747362e9c9c9.jpeg?im_w=960',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-media_library/original/38dcb45a-5675-4d67-b652-dfba99da9f58.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-media_library/original/87f9227c-440c-4ab0-bfe5-0495815c28ac.png?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-media_library/original/e7908363-a2bd-462d-9e1e-449d29cadd1b.png?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2010816-media_library/original/c9dd23f1-a6da-4a25-b01f-676b187db8f9.png?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fine-dining-grilled-sea-bass-royalty-free-image-1626951675.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://i.insider.com/5c052700d78fe042d2369357?width=700',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/14/6a/17/5f/rice-cakes-with-veggies.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpFpJYKBJxN7OrLk6dQrwHl5Y7A9J7dmDBnrVbXwmbP3oJ_-ywYgVB4a1-7RBzb7L4vk&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 5,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpbQCYG0Re5_4n1yZtY8eYuHzmMd-ja3d7nKIqDYD0sTLKgt09T-UN_Oecl7uv5U0cKk&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/8e9b91f8-66b2-4b9c-a186-252ec81b92c8.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/2262915c-568c-4873-8e86-b16938e845b5.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/c130810d-4480-42dd-8af1-fea72140e965.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/2f7de6aa-56ba-4ea9-9001-a8ae6ff7fa69.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 6,
          url: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2952670-media_library/original/ef10ce4f-f9b4-44b6-afdb-375d2a33852c.jpeg?im_w=1200',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1f-PrIYM1mr0-EPUW6i1xAeWySQ_K7U2Nw&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0D4dwm3k10qg_PwmVqySYJ4bzzL7V6qvbMprQ8Zw6vfUdoyTIt7BOP8A5Qksik8k8SeA&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: 'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/06/fine-dining-restaurants-in-Singapore-Art-900x643.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR808yQ89fPICr1QXjME6JbuDvkrnPbBcF60P92zgqxnu67zmg3ngfPQiUTf72Qi8go1sw&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 7,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0L-52jVv2RPLGErEPy6NpU3NrC_EDdHKST_zu5_jU42AJ_ZNHs94PniQdycW9f-FO9RY&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: 'https://elitetraveler.com/wp-content/uploads/2020/03/londonstock1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: 'https://i1.wp.com/berriesandspice.com/wp-content/uploads/2018/08/Berries-and-Spice-How-to-plate-dishes-worthy-of-a-fine-dining-restaurant-the-complete-guide-23.jpg?fit=960%2C640&ssl=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: 'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2017/06/fine-dining-restaurants-in-Singapore-Art-900x643.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: 'https://i2.wp.com/berriesandspice.com/wp-content/uploads/2018/08/Berries-and-Spice-How-to-plate-dishes-worthy-of-a-fine-dining-restaurant-the-complete-guide-19.jpg?resize=1160%2C773&ssl=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 8,
          url: 'https://assets3.thrillist.com/v1/image/1612230/828x610/flatten;crop;webp=auto;jpeg_quality=70',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWUrWjzJwjpk3BWV1HD20xrdw2HT_RDuZCw&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: 'https://i1.wp.com/berriesandspice.com/wp-content/uploads/2018/08/Berries-and-Spice-How-to-plate-dishes-worthy-of-a-fine-dining-restaurant-the-complete-guide-23.jpg?fit=960%2C640&ssl=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: 'https://fnbreport.ph/wp-content/uploads/2021/08/Is-fine-dining-dead-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: 'https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/03/m6_07-ed.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 9,
          url: 'http://www.elitetraveler.com/wp-content/uploads/2017/11/esplanadezagreb-Zinfandels-462x346.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: 'https://i0.wp.com/www.godsavethepoints.com/wp-content/uploads/2019/08/zgerinc-reglakrl-alma-textrkkal-s-karalbval.jpg?ssl=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorDEf37udgpAgRCrSqVY3Raf1W0siL3O2wB5-Y0hZ7BUYWX0CCvvncEk-We-bWeTklWE&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: 'https://eu-assets.simpleview-europe.com/isleofwight2015/imageresizer/?image=%2Fdmsimgs%2FTRH_May17_13resize_662384170.jpg&action=ProductListMain',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: 'https://i.insider.com/59722755c50c29ad008b5ba9?width=750&format=jpeg&auto=webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 10,
          url: 'https://i.insider.com/5c053a9f4b676b46de1438b3?width=1200&format=jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: 'https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/010221142300/billboard/park-chinois-chinese-new-year.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: 'https://content.fortune.com/wp-content/uploads/2019/08/HDL_1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: 'https://media.istockphoto.com/photos/bowls-with-japanese-food-picture-id1042391774?k=20&m=1042391774&s=612x612&w=0&h=zlX5EKZ5ra8cl5IyqOk32HYc4Gg94MssJ-hMPj3eoEE=',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93OpbCpt5DGjYoz7lQwsP1vX8yZ8YNuX1iQ&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 11,
          url: 'https://cumbriafoodie.files.wordpress.com/2019/01/p1250155.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 12,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994119007336665088/59d9d22c-3c99-4fa7-88ed-d5cc41118f04.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 12,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994119007537987594/bb7c0732-b918-4ffd-86a7-f6d245193557.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 12,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994119006602661899/f5eccad9-ee07-4372-b537-ca4759a6b543.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 12,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994119006371991602/f4b71a06-3815-4bb9-9803-f9b67ded5793.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 12,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994119006145495100/84d3bbae-2de3-4c92-bfec-0ba7ea7d0004.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994068235467100240/0afe7148-4639-4203-9bfc-67250155d1ba.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994068411774677063/2b4db3e5-fd8c-4824-b428-d2147e68d7ff.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994068412038910003/4cdb6168-ac17-43a5-839a-318d56298f22.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994068465335943228/67c3bf4e-1bb8-47ad-88a0-965ee4749e27.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994068412735176815/1ef83fad-9fc7-4bfe-b8ae-fc9bad996783.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994070332916912179/a2619bdb-e72f-45cf-bac5-e1ef6bf5e990.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994070332421971988/58170be9-9902-482a-a28c-56356b45d5c7.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994070332145160253/79dfb936-6306-425d-9cdd-d0baec89aa03.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994070331906068500/8ecee6a4-4f5a-422b-b482-4c8bacab9be3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 13,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994070331700555786/ff4f0dc6-e290-45fa-ab2a-a6b274196df0.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 14,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994086269804093470/1ebd647b-4779-429b-85d3-e6ea25f49a0a.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 14,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994086270013816952/10382bc4-f284-4b09-b74f-3d984dc8b016.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 14,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994070331700555786/ff4f0dc6-e290-45fa-ab2a-a6b274196df0.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 14,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994086270231904316/eab5cf06-ab29-4e22-85e6-d3f7cc512294.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 14,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994086270013816952/10382bc4-f284-4b09-b74f-3d984dc8b016.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 15,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994125233051144314/images.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 15,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994125233307000832/La-Colombe-header.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 15,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994125233634152488/protege.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 15,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994125233869049936/Proof-5-e1582314324500.jpg.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 15,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994125234095525980/fine-dining-restaurants-kw.gif',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 16,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994088493737328710/0fc12821-d2ce-4d99-9621-614644c9221e.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 16,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994088494014144603/62bc705e-125e-4c6e-9925-ea02e3d3cd41.jpg ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 16,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994088494530056192/ad5b8471-a389-4b14-b159-cdce5365b88b.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 16,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994088494756544594/afc3880b-91e1-4fdb-80f1-01dfd23f13ef.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 16,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994088494995611801/0ae171fd-4a1e-4f63-a52d-6b0b544f29ff.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 17,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994090287976693800/new-orleans-food-truck.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 17,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994090287544684624/Cuban-Sandwiches-Cubanos_side-view_680px.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 17,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994090286986833980/MV5BMTc5ODQyMzc4NV5BMl5BanBnXkFtZTgwMTg0NzEzMTE._V1_.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 17,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994090285904703558/2437909.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 17,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994090286131183636/chef-story.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 18,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994092941754761296/1212.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 18,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994092941511508058/o.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 18,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994092941222092861/3242342.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 18,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994092940693614602/1212o.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 18,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994092940945260554/123123.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 19,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994094537653891112/o.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 19,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994094537892958298/11.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 19,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994094537163161600/414.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 19,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994094537389658122/1010.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 19,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994094538178174976/111.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 20,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994096112858304532/dfgdfg.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 20,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994096112648605846/dfd.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 20,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994096113265156156/o.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 20,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994096113827201034/adada.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 20,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994096336066584606/o.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 21,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994097288358150185/aa.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 21,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994097572132180019/o.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 21,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994097288869847070/asaa.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 21,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994097288634978384/adsad.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 21,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994097288148426814/o.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 22,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994098983238651964/deef38b7-9c2c-4a55-867d-7ec31f9c2a39.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 22,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994098983603544184/02bb8507-91e7-4598-b8c1-1b17606fb214.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 22,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994098983951663255/05dc8e8e-3ac2-4ac5-abe9-f0d2a049598c.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 22,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994098984241090600/7d9293b2-189e-41ac-b9c6-cea2eb49b9d0.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 22,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994098982756286464/cde2f57f-7694-48ff-8c2a-b9068db7f56d.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 23,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994100063460675604/75dbbfa8-ffa2-4b1e-bfdc-3494ef727f35.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          eventId: 23,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994100063661998090/11d07e05-21e9-4286-8fae-e51c1d0640d1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          eventId: 23,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994100063229980702/f8d0ca6c-d263-4875-953c-7378858ec143.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          eventId: 23,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994100062999298130/e4996e7c-7d84-46b5-95b0-a393d0117842.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          eventId: 23,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994100062089138216/25a05ad1-d616-4500-bbe8-8af9691b956b.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 24,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994101828021137438/images.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 24,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994101826880278710/AliVegan_forweb-1015x677.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 24,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994101825521336320/vegan-plant-based-news-sova-vegan-butcher.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 24,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994101825928171520/vegan-plant-based-news-the-allotment-1024x1024.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 24,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994101824489529375/PruneDressingSalad-1-805x1207.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 25,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994106188218245181/image.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 25,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994106188834811904/XLBBaodega.12.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 25,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994106189044523048/pan-fried-dumplings-500x500.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 25,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994106189304578108/ca-times.brightspotcdn.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 25,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994106189711421483/Chicken-potsticker-with-crispy-skirt-5-scaled.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 26,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994107269212033024/DSC2287_WEB.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 26,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994107268981342278/asdasda.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 26,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994107268771610715/c21b2299-91e6-451c-a600-321cbec969fe.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 26,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994107268431888405/4ef08f2b-9600-41e7-a501-a74a33d544c9.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 26,
          url: 'https://cdn.discordapp.com/attachments/994067967023259668/994107268188614817/vegan-beer-battered-tofish-chips-and-mushy-peas-720x720.jpg',
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
    return queryInterface.bulkDelete('Images', null, {});
  },
};
