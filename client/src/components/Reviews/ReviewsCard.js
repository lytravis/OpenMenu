import React from 'react';
import './ReviewsCard.css';

const ReviewsCard = ({ review, user }) => {
  return (
    <div className="rc-container">
      <div className="rc-topRow">
        {review.User.profilePic ? (
          <div
            className="reviewerIcon"
            style={{
              backgroundImage: `url(${review.User.profilePic}), url(https://cdn.discordapp.com/attachments/920377762068447282/991505593279971368/isolated-chef-man-cartoon-design-icon-avatar-people-person-human-theme-vector-illustration-78587865.jpg)`,
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
      </div>
    </div>
  );
};

export default ReviewsCard;
