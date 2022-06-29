import React, { useState, useEffect } from 'react';
import ReviewsRating from './ReviewsRating';
import './Reviews.css';
import ReviewsForm from './ReviewsForm';
import ReviewsCard from './ReviewsCard';

const Reviews = ({ eventReviews, userId, hasReviewed, isHost, user }) => {
  // const hasReviewed =
  //   eventReviews.filter((x) => x.userId === userId).length > 0;
  // const isHost = userId === event?.userId;

  // const isHost = userId !== eventReviews.userId;

  // const tester = eventReviews?.map((review) =>
  //   console.log('^^^^^^^', review.User.profilePic)
  // );

  // console.log('useruseruser eventReviews', eventReviews);
  // console.log('useruseruser tester', tester);
  console.log('useruseruser user', user);
  // console.log('*************** this is the host', isHost);
  // console.log(
  //   '*************** this is the eventReview.user',
  //   eventReviews?.userId
  // );

  // console.log('TESTERSS');
  // console.log('eventReviewseventReviewseventReviewseventReviews', eventReviews);

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
      <div>
        {eventReviews.map((review) => (
          <ReviewsCard review={review} key={review.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
