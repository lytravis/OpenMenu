import React, { useState, useEffect } from 'react';
import ReviewsRating from './ReviewsRating';
import './Reviews.css';
import ReviewsForm from './ReviewsForm';

const Reviews = ({ eventReviews, userId, hasReviewed, isHost }) => {
  // const hasReviewed =
  //   eventReviews.filter((x) => x.userId === userId).length > 0;
  // const isHost = userId === event?.userId;

  // const isHost = userId !== eventReviews.userId;

  console.log('*************** user', userId);
  console.log('*************** this is the host', isHost);
  console.log(
    '*************** this is the eventReview.user',
    eventReviews.userId
  );

  console.log('TESTERSS');
  console.log('eventReviewseventReviewseventReviewseventReviews', eventReviews);

  return (
    <div>
      <div>
        <ReviewsRating eventReviews={eventReviews} />
      </div>
      {/* {userId && (
        <>
          {!hasReviewed && !isHost && (
            <ReviewsForm
         
            />
          )}
        </>
      )} */}
    </div>
  );
};

export default Reviews;
