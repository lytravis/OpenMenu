import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './ReviewsCard.css';
import { getReviews, removeReview, updateReview } from '../../store/review';
import ReactStars from 'react-rating-stars-component';

const ReviewsCard = ({ review, user, userId }) => {
  const dispatch = useDispatch();
  const { eventId, reviewId } = useParams();

  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showError, setShowError] = useState(false);

  const [foodRating, setFoodRating] = useState(0);
  const [experienceRating, setExperienceRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [accuracyRating, setAccuracyRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [comment, setComment] = useState('');

  const reviewYear = review.createdAt.slice(0, 4);

  const reviewMonth = review.createdAt.slice(5, 10);

  // console.log('$$$$$$$$$$$$$$$$$ eventId', eventId);
  // console.log('%%%%%%%%%%%%%%%%%%%%%% reviewId', reviewId);
  console.log('%%%%%%%%%%%%%%%%%%%%%% review', review.id);

  useEffect(() => {
    setFoodRating(review?.food);
    setExperienceRating(review?.experience);
    setCleanlinessRating(review?.cleanliness);
    setAccuracyRating(review?.accuracy);
    setValueRating(review?.value);
    setCommunicationRating(review?.communication);
    setComment(review?.comment);
  }, [review]);

  const deleteReview = async () => {
    dispatch(removeReview(review.id));
    setShowDelete(false);
  };


  const editReview = async (e) => {
    e.preventDefault();

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

    const reviewEdited = await dispatch(updateReview(payload, review.id));

    if (reviewEdited) {
      setShowUpdate(false);
    } else {
      setShowError(true);
    }
  };

  const closeUpdateForm = () => {
    setFoodRating(review?.food);
    setExperienceRating(review?.experience);
    setCleanlinessRating(review?.cleanliness);
    setAccuracyRating(review?.accuracy);
    setValueRating(review?.value);
    setCommunicationRating(review?.communication);
    setComment(review?.comment);
    setShowUpdate(false);
  };

  // console.log('############### profilePic', review?.User.profilePic);
  // console.log('!!!!!!!!!!!!!!!!!!!!!! reviewYear', reviewYear);
  // console.log('!!!!!!!!!!!!!!!!!!!!!! reviewMonth', reviewMonth);

  return (
    <>
      <div className="rc-container">
        <div className="rc-topRow">
          {review?.User?.profilePic ? (
            <div
              className="reviewerIcon"
              style={{
                backgroundImage: `url(${review?.User?.profilePic})`,
              }}
            ></div>
          ) : (
            <div
              className="reviewerIcon"
              style={{
                backgroundImage: `url(https://cdn.discordapp.com/attachments/920377762068447282/991505593279971368/isolated-chef-man-cartoon-design-icon-avatar-people-person-human-theme-vector-illustration-78587865.jpg)`,
              }}
            ></div>
          )}
          <div className="reivewNameDateAndButtons">
            <div className="reviewNameAndDate">
              <div className="reviewerName">{review?.User?.firstName}</div>
              <div className="reviewDate">{`${reviewMonth}-${reviewYear}`}</div>
            </div>
            {review?.userId === user?.id && (
              <div className="editDeleteReviewButtons">
                <div onClick={() => setShowUpdate(true)}>Edit</div>
                <div
                  id="deleteReviewButton"
                  onClick={() => setShowDelete(true)}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="reviewComment">{review?.comment}</div>
        {showDelete && (
          <div className="loginModal">
            <div className="deleteForm">
              <div className="xToClose" onClick={() => setShowDelete(false)}>
                <i className="fas fa-times"></i>
              </div>
              <div className="areYouSure">{`Are you sure you want to delete your review?`}</div>
              <div className="deleteConfirmButtons">
                <div onClick={deleteReview}>Delete Review</div>
                <div id="cancelDelete" onClick={() => setShowDelete(false)}>
                  Go Back
                </div>
              </div>
            </div>
          </div>
        )}
        {showUpdate && (
          <div className="loginModal">
            <div className="deleteForm" id="updateReviewForm">
              <div className="xToClose" onClick={closeUpdateForm}>
                <i className="fas fa-times"></i>
              </div>
              <div className="areYouSure" id="updateReviewHeader">
                Update Review
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
                  <form className="commentForm" onSubmit={editReview}>
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
                      <div>
                        {showError && (
                          <div className="addReviewError">
                            Please fill out all fields
                          </div>
                        )}
                      </div>
                      <button type="submit">Update Review</button>
                      <button
                        id="goBackUpdateReviewButton"
                        type="button"
                        onClick={closeUpdateForm}
                      >
                        Go Back
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewsCard;
