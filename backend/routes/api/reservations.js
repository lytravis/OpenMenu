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

const rsvpNotFoundError = (userId) => {
  const err = Error("Reservation not found");
  err.errors = [`Reservation ${userId} could not be found`];
  err.title = "Reservation not found";
  err.status = 404;
  return err;
};

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reservations = await Reservation.findAll({
      include: [{ model: User }, { model: Event }],
    });
    return res.json(reservations);
  })
);

router.get(
  "/:userId(\\d+)",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const reservations = await Reservation.findAll({
      where: { userId: userId },
      include: Event,
    });
    return res.json({ reservations });
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { userId, eventId, startDate, endDate } = req.body;

    const reservation = {
      userId,
      eventId,
      startDate,
      endDate,
    };

    const rsvp = await Reservation.create(reservation);
    res.json(rsvp);
  })
);

router.delete(
  "/:userId(\\d+)",
  asyncHandler(async (req, res, next) => {
    const reservation = await Reservation.findByPk(req.params.userId);
    if (reservation) {
      await reservation.destroy();
      res.status(204).end();
    } else {
      next(rsvpNotFoundError(req.params.userId));
    }
  })
);

module.exports = router;
