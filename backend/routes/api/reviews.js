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

const validateReview = [
  check("comment")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a review"),
  check("food")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a food rating"),
  check("experience")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a experience rating"),
  check("cleanliness")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a cleanliness rating"),
  check("accuracy")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a accuracy rating"),
  check("value")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value rating"),
  check("communication")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a communication rating"),
  handleValidationErrors,
];

const reviewNotFoundError = (id) => {
  const err = Error("Event not found");
  err.errors = [`Event ${id} could not be found`];
  err.title = "Event not found";
  err.status = 404;
  return err;
};

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
      include: [{ model: User }, { model: Event }],
    });
    return res.json(reviews);
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.destroy();
      res.status(204).end();
    } else {
      next(reviewNotFoundError(req.params.id));
    }
  })
);

router.post(
  "/",
  validateReview,
  asyncHandler(async (req, res) => {
    const {
      userId,
      eventId,
      comment,
      food,
      experience,
      cleanliness,
      accuracy,
      value,
      communication,
    } = req.body;

    const review = await Review.create({
      userId,
      eventId,
      comment,
      food,
      experience,
      cleanliness,
      accuracy,
      value,
      communication,
    });
    return res.json(review);
  })
);

router.put(
  "/:id(\\d+)",
  validateReview,
  asyncHandler(async (req, res) => {
    const {
      userId,
      eventId,
      comment,
      food,
      experience,
      cleanliness,
      accuracy,
      value,
      communication,
    } = req.body;
    const oldReview = await Review.findByPk(req.params.id);
    // console.log("---------> oldreview", oldReview);
    const review = await oldReview.update({
      userId,
      eventId,
      comment,
      food,
      experience,
      cleanliness,
      accuracy,
      value,
      communication,
    });
    return res.json(review);
  })
);

module.exports = router;
