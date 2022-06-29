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
    // console.log("88888888888888888 event reviews", eventReviews);
    // console.log("88888888888888888 event length", eventReviews.length);
    avgFood = (totalFood += review.food) / eventReviews.length;
    avgExperience =
      (totalExperience += review.experience) / eventReviews.length;
    avgCleanliness =
      (totalCleanliness += review.cleanliness) / eventReviews.length;
    avgAccuracy = (totalAccuracy += review.accuracy) / eventReviews.length;
    avgValue = (totalValue += review.value) / eventReviews.length;
    avgCommunication =
      (totalCommunication += review.communication) / eventReviews.length;
    totalAvg = (
      (avgFood +
        avgExperience +
        avgCleanliness +
        avgAccuracy +
        avgValue +
        avgCommunication) /
      6 /
      20
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
                    style={{ width: `${avgFood * 1.2}px` }}
                  ></div>
                </div>
                <div className="avgRating">{(avgFood / 20).toFixed(1)}</div>
              </div>
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating">
              <div className="reviewCategory">Experience</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgExperience * 1.2}px` }}
                  ></div>
                </div>
                <div className="avgRating">
                  {(avgExperience / 20).toFixed(1)}
                </div>
              </div>
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating">
              <div className="reviewCategory">Cleanliness</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgCleanliness * 1.2}px` }}
                  ></div>
                </div>
                <div className="avgRating">
                  {(avgCleanliness / 20).toFixed(1)}
                </div>
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
                    style={{ width: `${avgAccuracy * 1.2}px` }}
                  ></div>
                </div>
                <div className="avgRating">{(avgAccuracy / 20).toFixed(1)}</div>
              </div>
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating">
              <div className="reviewCategory">Value</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgValue * 1.2}px` }}
                  ></div>
                </div>
                <div className="avgRating">{(avgValue / 20).toFixed(1)}</div>
              </div>
            </div>
            <div className="emptySpace"></div>
            <div className="singleAvgRating">
              <div className="reviewCategory">Communication</div>
              <div className="rate-bar">
                <div className="max-bar">
                  <div
                    className="rev-bar"
                    style={{ width: `${avgCommunication * 1.2}px` }}
                  ></div>
                </div>
                <div className="avgRating">
                  {(avgCommunication / 20).toFixed(1)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsRating;
