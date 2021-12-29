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

function SingleEvent() {
  const dispatch = useDispatch();

  const { eventId, reviewId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const userId = useSelector((state) => state.session.user.id);
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const event = useSelector((state) => state?.event[eventId]);

  const eventImages = images.filter((image) => image.eventId == event.id);

  const reviews = useSelector((state) => Object.values(state.review));
  const eventReviews = reviews.filter((review) => review.eventId == event.id);

  const [showModal, setShowModal] = useState(false);

  // console.log("REVIEWS", reviews);
  console.log("$$ EVENT REVIEWS", eventReviews);
  // console.log("$$$$ EVENT IMAGES", eventImages);
  // console.log("-----> ****events****", events);
  // console.log("mmmmmmmmm EVENTID", eventId);
  // //   console.log("-----> userId", userId);
  // //   console.log("&&&&&&&&&&&&&&&&&&&&> images", images);

  // console.log("oooooooooooo>>> event", event);

  const eventTypes = useSelector((state) => Object.values(state.event));

  // console.log("---------> eventTypes", eventTypes);
  console.log("THIS IS THE REVIEW ID#####", reviewId);

  useEffect(() => {
    // dispatch(getEvent(eventId));
    dispatch(getEvents());
    dispatch(getImages());
    dispatch(getReviews());
    dispatch(getTypes()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const handleDelete = (reviewId) => {
    dispatch(removeReview(reviewId));
  };

  return (
    <>
      {isLoaded && (
        <div>
          <div className="event-container">
            <div>
              <h1>{event.name}</h1>
            </div>
            <div>
              <h2>{event.typeId}</h2>
            </div>

            <div className="event-images-container">
              <div className="event-images">
                {eventImages?.map(({ id, url }) => (
                  <img key={id} src={url} alt="img[i]" />
                ))}
              </div>
            </div>
            <div>
              <h3>{event.description}</h3>
            </div>
            <div>
              {event.address} {event.city} {event.state} {event.zipCode}{" "}
            </div>
          </div>

          <div className="reviews-container">
            <div>
              <h2>Reviews</h2>
            </div>
            <div className="reviews-container">
              <div>
                {eventReviews?.map((review) => (
                  <>
                    <div key={review.id}>
                      <div className="review-img">
                        {/* <img src={review?.User.profilePic} alt="profilePic" /> */}
                      </div>
                      <div>
                        <div className="review-name"> </div>
                        {review.User.firstName}
                        {review.userId === userId && (
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
                                  EditTTTTTTT
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
