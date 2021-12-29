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

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const images = await Image.findAll({
      include: [{ model: Event }],
    });
    return res.json(images);
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await Image.findAll({
      where: { eventId: id },
      //   include: Event,
    });
    return res.json({ images });
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { eventId, url } = req.body;
    const image = await Image.create({
      eventId,
      url,
    });

    return res.json({ image });
  })
);

//? Need to fix
router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await Image.findAll({
      where: { eventId: id },
      include: Event,
    });
    if (images) {
      await images.destroy();
      res.status(204).end();
    } else {
      throw new Error("Images does not exist");
    }
  })
);

module.exports = router;
