const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {
  User,
  Event,
  Image,
  Reservation,
  Review,
  Type,
} = require('../../db/models');

const router = express.Router();

const imageNotFoundError = (imageId) => {
  const err = Error('Image not found');
  err.errors = [`Image ${imageId} could not be found`];
  err.title = 'Image not found';
  err.status = 404;
  return err;
};

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const images = await Image.findAll({
      include: [{ model: Event }],
    });
    return res.json(images);
  })
);

router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await Image.findAll({
      where: { id: id },
      //   include: Event,
    });
    return res.json({ images });
  })
);

router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const { eventId, url } = req.body;
    const image = await Image.create({
      eventId,
      url,
    });

    return res.json({ image });
  })
);

router.put(
  '/:imageId(\\d+)',
  asyncHandler(async (req, res, next) => {
    const image = await Image.findByPk(req.params.imageId);
    // console.log("TEST 1 =====>", event);
    if (image) {
      image.eventId = req.body.eventId;
      image.url = req.body.url;

      await image.save();
      res.json({ image });
    } else {
      next(imageNotFoundError(req.params.imageId));
    }
  })
);

//? Need to fix
router.delete(
  '/:id(\\d+)',
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
      throw new Error('Images does not exist');
    }
  })
);

module.exports = router;
