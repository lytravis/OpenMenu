import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateReview, removeReview } from "../../store/review";

function EditReview({ review }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId, reviewId } = useParams();

  const userId = useSelector((state) => state.session.user.id);
  const [foodRating, setFoodRating] = useState(0);
  const [experienceRating, setExperienceRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [accuracyRating, setAccuracyRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [comment, setComment] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  console.log("mmmmmmmm***************mmmm eventId", eventId);

  const validate = () => {
    const validationErrors = [];

    if (
      !foodRating ||
      !experienceRating ||
      !cleanlinessRating ||
      !accuracyRating ||
      !valueRating ||
      !communicationRating ||
      !comment
    )
      validationErrors.push(
        "Your review request is incomplete.  Please fill out all fields and submit again"
      );

    return validationErrors;
  };

  useEffect(() => {
    return () => {
      setFoodRating(review?.food);
      setExperienceRating(review?.experience);
      setCleanlinessRating(review?.cleanliness);
      setAccuracyRating(review?.accuracy);
      setValueRating(review?.value);
      setCommunicationRating(review?.communication);
      setComment(review?.comment);
    };
  }, [review]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    const payload = {
      userId,
      eventId,
      food: foodRating,
      experience: experienceRating,
      cleanliness: cleanlinessRating,
      accuracy: accuracyRating,
      value: valueRating,
      communication: communicationRating,
      comment,
    };

    dispatch(updateReview(payload, reviewId));
    // history.push(`/events/:eventId`);
    history.push("/events/1");
  };

  return (
    <div className="review-container">
      <div>
        <h1>TEST</h1>
      </div>
      <div>Leave a Review</div>
      <div className="rating-container">
        <div>
          <div>Food</div>
          <Rating
            onClick={(rating) => setFoodRating(rating)}
            ratingValue={foodRating}
            showTooltip
          />
        </div>

        <div>
          <div>Experience</div>
          <Rating
            onClick={(rating) => setExperienceRating(rating)}
            ratingValue={experienceRating}
            showTooltip
          />
        </div>
        <div>
          <div>Cleanliness</div>
          <Rating
            onClick={(rating) => setCleanlinessRating(rating)}
            ratingValue={cleanlinessRating}
            showTooltip
          />
        </div>
        <div>
          <div>Accuracy</div>
          <Rating
            onClick={(rating) => setAccuracyRating(rating)}
            ratingValue={accuracyRating}
            showTooltip
          />
        </div>
        <div>
          <div>Value</div>
          <Rating
            onClick={(rating) => setValueRating(rating)}
            ratingValue={valueRating}
            showTooltip
          />
        </div>
        <div>
          <div>Communication</div>
          <Rating
            onClick={(rating) => setCommunicationRating(rating)}
            ratingValue={communicationRating}
            showTooltip
          />
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Comment</label>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            type="text"
            placeholder="Comment"
          />
          <div className="review-button">
            <button type="submit">Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditReview;