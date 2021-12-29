// import React, { useEffect, useState } from "react";
// import { Rating } from "react-simple-star-rating";
// import { useHistory, useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { getReviews, removeReview, updateReview } from "../../store/review";
// import { getEvents } from "../../store/event";

// export default function Reviews() {
//   const dispatch = useDispatch();
//   const { eventId } = useParams();
//   const userId = useSelector((state) => state.session.user.id);
//   const [isLoaded, setIsLoaded] = useState(false);

//   const [foodRating, setFoodRating] = useState(0);
//   const [experienceRating, setExperienceRating] = useState(0);
//   const [cleanlinessRating, setCleanlinessRating] = useState(0);
//   const [accuracyRating, setAccuracyRating] = useState(0);
//   const [valueRating, setValueRating] = useState(0);
//   const [communicationRating, setCommunicationRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [validationErrors, setValidationErrors] = useState([]);
//   const [reviewStatus, setReviewStatus] = useState(true);

//   const reviews = useSelector((state) => Object.values(state.review));
//   const events = useSelector((state) => Object.values(state.event));
//   const event = useSelector((state) => state?.event[eventId]);

//   //   const eventReviews = reviews.filter((review) => review.eventId == event.id);

//   useEffect(() => {
//     // dispatch(getEvent(eventId));
//     dispatch(getEvents());

//     dispatch(getReviews()).then(() => setIsLoaded(true));
//   }, [dispatch]);

//   console.log("*********THIS IS REVIEWS", reviews);
//   //   console.log("********* eventReviews", eventReviews);
//   console.log("--------------> eventId", eventId);

//   return (
//     <div>
//       <div>

//       </div>
//     </div>
//   );
// }
