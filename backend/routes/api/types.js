const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { Op } = require('sequelize');
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

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const types = await Type.findAll();
    // console.log("---------> types", types);
    return res.json(types);
  })
);

router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const type = await Event.findAll({
      where: { typeId: id },
    });
    return res.json({ type });
  })
);

router.get(
  '/search/:searchTerm:Slug(-*)?',
  asyncHandler(async (req, res) => {
    const { searchTerm } = req.params;
    const events = await Type.findAll({
      include: [{ model: Event }],
      where: {
        [Op.or]: [{ name: { [Op.iLike]: `%${searchTerm}%` } }],
      },
    });
    return res.json(events);
  })
);

module.exports = router;
