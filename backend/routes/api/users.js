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

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('A first name must be provided.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid A last name must be provided.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.signup({
      firstName,
      lastName,
      email,
      password,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.get(
  '/:userId(\\d+)',
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.userId);

    return res.json(user);
  })
);

router.put(
  '/name/:userId(\\d+)',
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;

      await user.save();
      res.json({ user });
    }
  })
);
router.put(
  '/email/:userId(\\d+)',
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      user.email = req.body.email;

      await user.save();
      res.json({ user });
    }
  })
);
router.put(
  '/password/:userId(\\d+)',
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      user.hashedPassword = req.body.hashedPassword;

      await user.save();
      res.json({ user });
    }
  })
);
router.put(
  '/image/:userId(\\d+)',
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      user.profilePic = req.body.profilePic;

      await user.save();
      res.json({ user });
    }
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const user = await User.findAll({
      // include: [{ model: User }, { model: Type }],
    });
    return res.json(user);
  })
);

module.exports = router;
