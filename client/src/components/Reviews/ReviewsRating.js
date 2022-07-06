import React from 'react';
import './Reviews.css';

const ReviewsRating = ({ eventReviews }) => {
  let totalFood = 0;
  let totalExperience = 0;
  let totalCleanliness = 0;
  let totalAccuracy = 0;
  let totalValue = 0;
  let totalCommunication = 0;
  let avgFood = 0;
  let avgExperience = 0;
  let avgCleanliness = 0;
  let avgAccuracy = 0;
  let avgValue = 0;
  let avgCommunication = 0;
  let totalAvg = 0;

  // console.log("THIS IS REVIEWS HERE", reviews);

  eventReviews?.forEach((review) => {
    avgFood = (totalFood += Number(review.food)) / eventReviews.length;
    avgExperience =
      (totalExperience += Number(review.experience)) / eventReviews.length;
    avgCleanliness =
      (totalCleanliness += Number(review.cleanliness)) / eventReviews.length;
    avgAccuracy =
      (totalAccuracy += Number(review.accuracy)) / eventReviews.length;
    avgValue = (totalValue += Number(review.value)) / eventReviews.length;
    avgCommunication =
      (totalCommunication += Number(review.communication)) /
      eventReviews.length;
    totalAvg = (
      (avgFood +
        avgExperience +
        avgCleanliness +
        avgAccuracy +
        avgValue +
        avgCommunication) /
      6
    ).toFixed(1);
  });

  let totalSum =
    avgFood +
    avgExperience +
    avgCleanliness +
    avgAccuracy +
    avgValue +
    avgCommunication;

  return (
    <div>
      <div className="reviews-header">
        <div>
          <span className="reviews-star">
            <i className="fas fa-star" />
          </span>
          {totalAvg}
          {'  '}
          <span id="reviews-length">({eventReviews?.length} reviews)</span>
        </div>
      </div>

      <div className="reviewsContainer">
        <div className="rating-container">
          <div className="review-row1">
            <div className="singleAvgRating">
              <div className="reviewCategory">Food</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgFood * 24}px` }}
                  ></div>
                </div>
                <div className="avgRating">{avgFood.toFixed(1)}</div>
              </div>
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating">
              <div className="reviewCategory">Experience</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgExperience * 24}px` }}
                  ></div>
                </div>
                <div className="avgRating">{avgExperience.toFixed(1)}</div>
              </div>
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating">
              <div className="reviewCategory">Cleanliness</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgCleanliness * 24}px` }}
                  ></div>
                </div>
                <div className="avgRating">{avgCleanliness.toFixed(1)}</div>
              </div>
            </div>
          </div>
          <div className="review-row2">
            <div className="singleAvgRating">
              <div className="reviewCategory">Accuracy</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgAccuracy * 24}px` }}
                  ></div>
                </div>
                <div className="avgRating">{avgAccuracy.toFixed(1)}</div>
              </div>
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating">
              <div className="reviewCategory">Value</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgValue * 24}px` }}
                  ></div>
                </div>
                <div className="avgRating">{avgValue.toFixed(1)}</div>
              </div>
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating">
              <div className="reviewCategory">Communication</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgCommunication * 24}px` }}
                  ></div>
                </div>
                <div className="avgRating">{avgCommunication.toFixed(1)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsRating;
