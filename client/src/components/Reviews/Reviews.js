import React from 'react';
import ReviewsRating from './ReviewsRating';
import './Reviews.css';
import ReviewsForm from './ReviewsForm';

const Reviews = ({ eventReviews }) => {
  return (
    <div>
      <div>
        <ReviewsRating eventReviews={eventReviews} />
      </div>
      <div>
        <ReviewsForm />
      </div>
    </div>
  );
};

export default Reviews;
