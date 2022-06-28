const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
  User,
  Event,
  Image,
  Reservation,
  Review,
  Type,
} = require("../../db/models");

const router = express.Router();

const eventNotFoundError = (eventId) => {
  const err = Error("Event not found");
  err.errors = [`Event ${eventId} could not be found`];
  err.title = "Event not found";
  err.status = 404;
  return err;
};

const validateEvent = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an event name"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an event description"),
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an event address"),
  check("city")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an event city"),
  check("state")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an event state"),
  check("zipCode")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an event zip code"),
  // check("latitude")
  //   .exists({ checkFalsy: true })
  //   .withMessage("Please provide a valid latitude"),
  // check("longitude")
  //   .exists({ checkFalsy: true })
  //   .withMessage("Please provide a valid longitude"),
  handleValidationErrors,
];

//GET ALL EVENTS
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const events = await Event.findAll({
      include: [{ model: User }, { model: Type }, { model: Image }],
    });
    return res.json(events);
  })
);

//GET ONE EVENT
router.get(
  "/:eventId(\\d+)",
  asyncHandler(async (req, res) => {
    const event = await Event.findByPk(req.params.eventId, {
      include: [{ model: User }, { model: Type }],
    });

    return res.json(event);
  })
);

router.post(
  "/",
  validateEvent,
  asyncHandler(async (req, res) => {
    const {
      name,
      description,
      address,
      city,
      state,
      zipCode,
      // latitude,
      // longitude,
      userId,
      typeId,
    } = req.body;

    const event = await Event.create({
      name,
      description,
      address,
      city,
      state,
      zipCode,
      // latitude,
      // longitude,
      userId,
      typeId,
    });
    return res.json(event);
  })
);

router.put(
  "/:eventId(\\d+)",
  validateEvent,
  asyncHandler(async (req, res, next) => {
    const event = await Event.findByPk(req.params.eventId);
    // console.log("TEST 1 =====>", event);
    if (event) {
      event.name = req.body.name;
      event.description = req.body.description;
      event.address = req.body.address;
      event.city = req.body.city;
      event.state = req.body.state;
      event.zipCode = req.body.zipCode;
      // event.latitude = req.body.latitude;
      // event.longitude = req.body.longitude;
      // console.log("TEST 2 =====>", event);
      await event.save();
      res.json({ event });
    } else {
      next(eventNotFoundError(req.params.eventId));
    }
  })
);

router.delete(
  "/:eventId(\\d+)",
  asyncHandler(async (req, res, next) => {
    const event = await Event.findByPk(req.params.eventId);
    if (event) {
      await event.destroy();
      res.status(204).end();
    } else {
      next(eventNotFoundError(req.params.eventId));
    }
  })
);

module.exports = router;
