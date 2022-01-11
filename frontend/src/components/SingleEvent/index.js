import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getEvents } from "../../store/event";
import { getImages } from "../../store/image";
import { getReviews, removeReview } from "../../store/review";
import { getTypes } from "../../store/type";
import ReviewForm from "../Reviews/ReviewForm";
import EditReview from "../Reviews/EditReview";
import { Modal } from "../../context/Modal";
import "./SingleEvent.css";
import ReservationForm from "../Reservation/ReservationForm";
function SingleEvent() {
  const dispatch = useDispatch();
  const { eventId, reviewId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const userId = useSelector((state) => state.session.user?.id);
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const event = useSelector((state) => state?.event[eventId]);
  const eventImages = images.filter((image) => image?.eventId == event?.id);
  const reviews = useSelector((state) => Object.values(state.review));
  const eventReviews = reviews.filter((review) => review?.eventId == event?.id);
  const [showModal, setShowModal] = useState(false);
  // console.log("REVIEWS", reviews);
  // console.log("$$ EVENT REVIEWS", eventReviews);
  // console.log("$$$$ EVENT IMAGES", eventImages);
  // console.log("-----> ****events****", events);
  // console.log("mmmmmmmmm EVENTID", eventId);
  // //   console.log("-----> userId", userId);
  // //   console.log("&&&&&&&&&&&&&&&&&&&&> images", images);
  // console.log("oooooooooooo>>> event", event);
  const eventTypes = useSelector((state) => Object.values(state.event));
  // console.log("---------> eventTypes", eventTypes);
  // console.log("THIS IS THE REVIEW ID#####", reviewId);
  useEffect(() => {
    // dispatch(getEvent(eventId));
    dispatch(getEvents());
    dispatch(getImages());
    dispatch(getTypes());
    dispatch(getReviews()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const handleDelete = (reviewId) => {
    dispatch(removeReview(reviewId));
  };

  // console.log("$$$$$$$$$$$$$ THIS IS THE EVENT", event?.Type.name);

  useEffect(
    (eventImages) => {
      return eventImages;
    },
    [dispatch, eventImages]
  );

  const img1 = eventImages[0];
  const img2 = eventImages[1];
  const img3 = eventImages[2];
  const img4 = eventImages[3];
  const img5 = eventImages[4];
  // console.log("imgggggg 1", img1);

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
    console.log("88888888888888888 event reviews", eventReviews);
    console.log("88888888888888888 event length", eventReviews.length);
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

  // console.log("TOTAL SUM", totalSum);
  // console.log("THIS IS THE TOTAL AVG", totalAvg);

  // console.log("***** TOTAL FOOD", totalFood);

  // console.log("THIS IS EVENT REVEIWS", eventReviews);
  // console.log(
  //   "THIS IS THE AVG FOOD",
  //   avgFood,
  //   avgExperience,
  //   avgCommunication,
  //   avgCleanliness,
  //   avgValue,
  //   avgAccuracy
  // );

  return (
    <>
      {isLoaded && (
        <div className="container-single">
          <div className="event-container">
            <div>
              <h1>{event?.name}</h1>
            </div>
            <div>
              <span className="total-review">
                <i className="fas fa-star" />
                {totalAvg} ({eventReviews?.length} reviews)
              </span>
            </div>
            <div className="event-images-container">
              <img
                className="event-images-first"
                src={img1?.url}
                alt={eventImages.id}
              />
              <img src={img2?.url} alt={eventImages.id} />
              <img src={img3?.url} alt={eventImages.id} />
              <img src={img4?.url} alt={eventImages.id} />
              <img src={img5?.url} alt={eventImages.id} />
            </div>
            <div className="single-events-container">
              <div>
                <h3>{event?.description}</h3>
              </div>
              <div>
                {event?.address} {event?.city} {event?.state} {event?.zipCode}{" "}
              </div>
              <div className="event-info-container">
                <div className="owner-info">
                  <div className="host-img">
                    <img
                      className="nav-user-pic"
                      src={event?.User.profilePic}
                      alt="profilePic"
                    />
                  </div>
                  <div>
                    {`This event is hosted by ${event?.User.firstName} ${event?.User.lastName} `}
                  </div>
                </div>
                <div className="event-type">
                  <div>
                    <i className="fa fa-list-alt fa-2x" />
                    Type
                  </div>
                  <div>{event?.Type.name}</div>
                </div>
                <div className="event-type">
                  <div>
                    <i className="fas fa-user fa-2x" />
                    Member Since
                  </div>
                  <div>2021</div>
                </div>
              </div>
              <div>
                <ReservationForm />
              </div>
            </div>
            <div className="">
              <div className="reviews-header">
                <div>
                  <span className="reviews-star">
                    <i className="fas fa-star" />
                  </span>
                  {totalAvg}
                  {"  "}
                  <span id="reviews-length">
                    ({eventReviews?.length} reviews)
                  </span>
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
                        <div className="avgRating">
                          {(avgFood / 20).toFixed(1)}
                        </div>
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
                        <div className="avgRating">
                          {(avgAccuracy / 20).toFixed(1)}
                        </div>
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
                        <div className="avgRating">
                          {(avgValue / 20).toFixed(1)}
                        </div>
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
                <div>
                  {eventReviews?.map((review) => (
                    <>
                      <div key={review?.id} className="review-info">
                        <div className="review-img">
                          <img
                            className="review-user-pic"
                            src={review?.User?.profilePic}
                            alt="profilePic"
                          />
                        </div>
                        <div>
                          <div className="review-name"> </div>
                          {review?.User?.firstName}
                          {review?.userId === userId && (
                            // console.log("TEST ===",review.userId === userId ),
                            <div className="review-btns">
                              <div>
                                {/* <Link to={`reviews/${review.id}/edit`}>
                                <button type="button" className="edit-button">
                                  Edit
                                </button>
                              </Link> */}
                                <Link to={`/${review.id}/edit`}>
                                  <button type="button" className="edit-button">
                                    Edit
                                  </button>
                                </Link>
                              </div>
                              <div>
                                <button
                                  onClick={() => handleDelete(review?.id)}
                                  className="delete-button"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        <div>{review.comment}</div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div>
                <ReviewForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SingleEvent;
// {
//   /* <div>
//                               <button
//                                 onClick={() => setShowModal(true)}
//                                 className="update-button"
//                               >
//                                 Update
//                               </button>
//                               {showModal && (
//                                 <Modal onClose={() => setShowModal(false)}>
//                                   <EditReview
//                                     key={review.id}
//                                     id={review.id}
//                                     userId={review.userId}
//                                     eventId={review.eventId}
//                                     comment={review.comment}
//                                     food={review.food}
//                                     experience={review.experience}
//                                     cleanliness={review.cleanliness}
//                                     accuracy={review.accuracy}
//                                     value={review.value}
//                                     communication={review.communication}
//                                   />
//                                 </Modal>
//                               )}
//                             </div> */
// }
//MAPPED VER
{
  /* <div className="event-images">
{eventImages?.map(({ id, url }) => (
  <img
    className="event-images-col-2  event-images-row-2"
    key={id}
    src={url}
    alt="img[i]"
  />
))}
</div> */
}
