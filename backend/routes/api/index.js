const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const eventsRouter = require("./events.js");
const imagesRouter = require("./images.js");
const reservationsRouter = require("./reservations.js");
const reviewsRouter = require("./reviews.js");
const typesRouter = require("./types.js");
const searchRouter = require("./search.js");
const mapsRouter = require('./maps');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/events', eventsRouter);
router.use('/images', imagesRouter);
router.use('/reservations', reservationsRouter);
router.use('/reviews', reviewsRouter);
router.use('/types', typesRouter);
router.use('/search', searchRouter);
router.use('/maps', mapsRouter);

module.exports = router;
