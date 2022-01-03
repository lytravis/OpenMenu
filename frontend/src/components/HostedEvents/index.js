import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import "./HostedEvents.css";
import { getEvents, removeEvent } from "../../store/event";

import EditEvent from "../EditEvent";

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
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const hostId = useSelector((state) => state.session.user.id);

  const hostedEvents = events.filter((event) => event.userId == hostId);

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

  const goToEvent = (e, eventId) => {
    e.preventDefault();
    history.push(`/events/${eventId}`);
  };

  return (
    <>
      {isLoaded && (
        <div>
          {hostedEvents.map((hostedEvent) => (
            <div className="host-container" key={hostedEvent.id}>
              <div onClick={(e) => goToEvent(e, hostedEvent.id)}>
                <div>{hostedEvent.name}</div>
                <div>{hostedEvent.id}</div>
                <div className="host-info">
                  {" "}
                  <div>{hostedEvent.description}</div>
                  <div>
                    {hostedEvent.address} {hostedEvent.city} {hostedEvent.state}{" "}
                    , {hostedEvent.zipCode}{" "}
                  </div>
                </div>
              </div>
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
