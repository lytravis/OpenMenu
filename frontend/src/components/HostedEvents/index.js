import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import "./HostedEvents.css";
import { getEvents, removeEvent } from "../../store/event";
import { addImage } from "../../store/image";
import EditEvent from "../EditEvent";
import ImageForm from "../ImageForm";

function HostedEvents({
  id,
  name,
  description,
  address,
  city,
  state,
  zipCode,
  // latitude,
  // longitude,
  userId,
  typeId,
}) {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [url, setUrl] = useState("");
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const hostId = useSelector((state) => state.session.user.id);

  const hostedEvents = events.filter((event) => event.userId == hostId);

  // console.log("-----------> event", hostedEvents);
  // console.log("-----------> eventImg", eventId);

  useEffect(() => {
    dispatch(getEvents()).then(() => setIsLoaded(true));
    // return () => {
    //   setIsLoaded();
    // };
  }, [dispatch]);

  // console.log("DADADADADADAADA eventId", eventId);
  //   console.log("$$$$$$$$$>>> hostedEvents", hostedEvents);

  //   console.log("xxxxxxxxx> hostId", hostId);

  //   console.log("-----> ****events****", events);

  //   console.log("&&&&&&&&&&&&&&&&&&&&> images", images);

  const handleDelete = (eventId) => {
    dispatch(removeEvent(eventId));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const img = { url, eventId };
    await dispatch(addImage(img));
    setUrl("");
  };

  const goToEvent = (e, eventId) => {
    e.preventDefault();
    history.push(`/events/${eventId}`);
  };

  return (
    <>
      {isLoaded && (
        <div>
          {hostedEvents.map((hostedEvent) => (
            <div>
              <div className="host-container" key={hostedEvent.id}>
                <div
                  className="host-wrap"
                  onClick={(e) => goToEvent(e, hostedEvent.id)}
                >
                  <div className="events-image">
                    {hostedEvent?.Images[0]?.url?.length > 0 ? (
                      <img
                        className="img1"
                        src={hostedEvent?.Images[0]?.url}
                        alt="event"
                      />
                    ) : (
                      <img
                        className="img1"
                        src="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg?ver=6"
                        alt="event"
                      />
                    )}
                  </div>
                  <div>{hostedEvent.name}</div>
                </div>
                <div className="host-info">
                  {" "}
                  {/* <div>{hostedEvent.description}</div> */}
                  {/* <div>
                    {hostedEvent.address} {hostedEvent.city} {hostedEvent.state}{" "}
                    , {hostedEvent.zipCode}{" "}
                  </div> */}
                  <div className="host-buttons">
                    <button
                      onClick={() => handleDelete(hostedEvent.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                    <Link to={`events/${hostedEvent.id}/edit`}>
                      <button type="button" className="edit-button">
                        Edit
                      </button>
                    </Link>
                    {/* <ImageForm  /> */}

                    {/* <div>
                      <form>
                        <input
                          type="text"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          required
                        />
                        <button onClick={() => handleUpload(hostedEvent.id)}>
                          Upload
                        </button>
                      </form>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default HostedEvents;

// return (
//   <>
//     {isLoaded && (
//       <div>
//         {hostedEvents.map((hostedEvent) => (
//           <div key={hostedEvent.id}>
//             <EventsDetail key={hostedEvent.id} {...hostedEvent} />
//             <div>
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="update-button"
//               >
//                 Update
//               </button>
//               {showModal && (
//                 <Modal onClose={() => setShowModal(false)}>
//                   <EditEvent
//                     key={id}
//                     id={id}
//                     name={name}
//                     description={description}
//                     address={address}
//                     city={city}
//                     state={state}
//                     zipCode={zipCode}
//                     latitude={latitude}
//                     longitude={longitude}
//                     typeId={typeId}
//                   />
//                 </Modal>
//               )}
//             </div>

//             <hr />
//           </div>
//         ))}
//       </div>
//     )}
//   </>
// );
// }
