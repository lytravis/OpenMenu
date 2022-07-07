import React, { useState, useEffect } from 'react';
import ReviewsRating from './ReviewsRating';
import './Reviews.css';
import ReviewsForm from './ReviewsForm';
import ReviewsCard from './ReviewsCard';

const Reviews = ({ eventReviews, userId, hasReviewed, isHost, user }) => {
  const [sortedReviews, setSortedReviews] = useState([]);

  //Sort reviews by most recent
  useEffect(() => {
    if (eventReviews[0] === null) {
      return;
    }

    const sortedReviews = eventReviews;

    sortedReviews.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setSortedReviews(sortedReviews);
  }, [eventReviews]);

  console.log('$$$$$$$$$$$$$$$$$$$', sortedReviews);

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  // randomDate(new Date(2022, 0, 1), new Date());

  console.log(
    '!!!!!!!!! randomDate ',
    randomDate(new Date(2022, 0, 1), new Date())
  );

  return (
    <div>
      <div>
        <ReviewsRating eventReviews={eventReviews} />
      </div>
      <div>
        <>
          {user?.id && (
            <>
              {!hasReviewed && !isHost && <ReviewsForm />}
              {hasReviewed && (
                <div className="addReviewContainer">
                  <div className="addAReview alreadyAdded">
                    You have already submitted a review
                  </div>
                </div>
              )}
              {isHost && (
                <div className="addReviewContainer">
                  <div className="addAReview alreadyAdded">
                    You cannot add a review to your own event
                  </div>
                </div>
              )}
            </>
          )}
        </>
      </div>
      <div className="allReviews">
        {sortedReviews.map((review) => (
          <ReviewsCard
            review={review}
            key={review.id}
            user={user}
            userId={userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
