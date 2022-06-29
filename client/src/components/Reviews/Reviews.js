import React from 'react';
import ReviewsRating from './ReviewsRating';
import './Reviews.css';

const Reviews = ({ eventReviews }) => {
  return (
    <div>
      <div>
        <ReviewsRating eventReviews={eventReviews} />
      </div>
    </div>
  );
};

export default Reviews;
