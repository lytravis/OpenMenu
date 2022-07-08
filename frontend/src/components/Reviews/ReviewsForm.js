import React, { useEffect, useState } from 'react';

import ReactStars from 'react-rating-stars-component';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addReview } from '../../store/review';
import { getEvents } from '../../store/event';

import './ReviewsForm.css';

const ReviewsForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams();

  const userId = useSelector((state) => state.session.user?.id);
  const [foodRating, setFoodRating] = useState(0);
  const [experienceRating, setExperienceRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [accuracyRating, setAccuracyRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [comment, setComment] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const event = useSelector((state) => state?.event[eventId]);
  // console.log("**************** eventId", event);
  // console.log("mmmmmmmm***************mmmm eventId", eventId);

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
        'Your review request is incomplete.  Please fill out all fields and submit again'
      );

    return validationErrors;
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

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

    dispatch(addReview(payload));

    setFoodRating(0);
    setExperienceRating(0);
    setCleanlinessRating(0);
    setAccuracyRating(0);
    setValueRating(0);
    setCommunicationRating(0);
    setComment('');

    history.push(`/events/${event.id}`);
  };

  return (
    <>
      <div className="review-container">
        <div>
          <h3>Leave a Review</h3>
          {validationErrors.length > 0 && (
            <div className="addReviewError">
              The following errors were found:
              <ul>
                {validationErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="rating-container">
          <div className="review-row1">
            <div className="singleAvgRating addRatingCategory">
              <div className="reviewCategory">Food</div>
              <ReactStars
                onChange={(rating) => setFoodRating(rating)}
                value={foodRating}
                isHalf={true}
              />
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating addRatingCategory">
              <div className="reviewCategory">Experience</div>
              <ReactStars
                onChange={(rating) => setExperienceRating(rating)}
                value={experienceRating}
                isHalf={true}
              />
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating addRatingCategory">
              <div className="reviewCategory">Cleanliness</div>
              <ReactStars
                onChange={(rating) => setCleanlinessRating(rating)}
                value={cleanlinessRating}
                isHalf={true}
              />
            </div>
          </div>
          <div className="review-row2">
            <div className="singleAvgRating addRatingCategory">
              <div className="reviewCategory">Accuracy</div>
              <ReactStars
                onChange={(rating) => setAccuracyRating(rating)}
                value={accuracyRating}
                isHalf={true}
              />
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating addRatingCategory">
              <div className="reviewCategory">Value</div>
              <ReactStars
                onChange={(rating) => setValueRating(rating)}
                value={valueRating}
                isHalf={true}
              />
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating addRatingCategory">
              <div className="reviewCategory">Communication</div>
              <ReactStars
                onChange={(rating) => setCommunicationRating(rating)}
                value={communicationRating}
                isHalf={true}
              />
            </div>
          </div>
          <div className="commentBox">
            <form className="commentForm" onSubmit={handleSubmit}>
              <div className="commentHolder">
                <label>Comment</label>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  type="text"
                  placeholder="Comment"
                />
              </div>
              <div className="reviewButtonContainer">
                <button type="submit">Submit Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

//   <Rating onClick={handleRating} ratingValue={rating}

export default ReviewsForm;
