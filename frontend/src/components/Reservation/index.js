import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getRSVP, getAllRsvps, removeRSVP } from "../../store/reservation";
import "./Reservation.css";

export default function Reservation() {
  const dispatch = useDispatch();
  const history = useHistory();

  let rsvpss = useSelector((state) => Object.values(state?.reservation));
  let rsvps = rsvpss[0];

  // const rsvpObj = Object.assign({}, ...rsvpss);

  const userId = useSelector((state) => state.session.user?.id);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getRSVP(userId)).then(() => setIsLoaded(true));
    // dispatch(getAllRsvps());
  }, [dispatch, userId]);

  // console.log("---------------> rsvp", rsvps);
  // console.log("---------------> rsvp[0]", rsvps[0]);
  // console.log("---------------> rsvpObj", rsvpObj);
  // console.log("&&& userId", userId);

  //TO CONVERT new Date() to be '1/7/2022, 3:16:43 PM'
  // .toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })

  let pastRsvp = [];
  let newRsvp = [];
  let today = new Date();

  let convertTime = (time) =>
    time.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });

  const handleDelete = (userId) => {
    dispatch(removeRSVP(userId));
  };

  const goToEvent = (e, eventId) => {
    e.preventDefault();
    history.push(`/events/${eventId}`);
  };

  // console.log("************** convert time", convertTime(today));

  // for (let rsvp of rsvps) {
  //   // let date = new Date(rsvp.checkIn.slice(5, 16));
  //   let date = rsvp;
  //   // console.log("-------------------- date", date);
  //   // console.log("******************* today", today);

  //   if (date < today) {
  //     pastRsvp.push(rsvp);
  //   } else {
  //     newRsvp.push(rsvp);
  //   }
  // }

  // console.log(">>>>>>>>>>>>>> pastRsvp", pastRsvp);
  // console.log(">>>>>>>>>>>>>> newRsvp", newRsvp);

  return (
    <>
      {isLoaded && (
        <div className="rsvp-container">
          <div className="container">
            {rsvps?.map((rsvp) => (
              <div className="rsvp-card" key={rsvp.id}>
                <div className="rsvp-title">{rsvp.Event.name}</div>
                <div>
                  {" "}
                  <button
                    onClick={() => handleDelete(rsvp.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>{" "}
                </div>
                <div
                  className="rsvp-info"
                  key={rsvp.id}
                  onClick={(e) => goToEvent(e, rsvp.id)}
                >
                  <div>
                    <div> {rsvp.checkIn} </div>
                    <div>
                      <img
                        className="rsvp-img"
                        src={rsvp.User.profilePic}
                        alt="img"
                      />
                    </div>
                    <div> {rsvp.guests} </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
