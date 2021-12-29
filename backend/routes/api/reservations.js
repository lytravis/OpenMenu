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

const rsvpNotFoundError = (id) => {
  const err = Error("Reservation not found");
  err.errors = [`Reservation ${id} could not be found`];
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
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reservations = await Reservation.findAll({
      where: { userId: id },
      include: Event,
    });
    return res.json({ reservations });
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      await reservation.destroy();
      res.status(204).end();
    } else {
      next(rsvpNotFoundError(req.params.id));
    }
  })
);

module.exports = router;
