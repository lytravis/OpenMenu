const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const eventsRouter = require("./events.js");
const imagesRouter = require("./images.js");
const reservationsRouter = require("./reservations.js");
const reviewsRouter = require("./reviews.js");
const typesRouter = require("./types.js");

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/events", eventsRouter);
router.use("/images", imagesRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);
router.use("/types", typesRouter);

module.exports = router;
