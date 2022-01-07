import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getRSVP, getAllRsvps } from "../../store/reservation";
import date from "date-and-time";
export default function Reservation() {
  const dispatch = useDispatch();
  const history = useHistory();

  const rsvps = useSelector((state) => Object.values(state.reservation));
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(getRSVP(userId));
    // dispatch(getAllRsvps());
  }, [dispatch, userId]);

  console.log("---------------> rsvp", rsvps);
  console.log("&&& userId", userId);

//   const now = new Date();
//   date.format(now, "hh:mm A [GMT]Z"); // => '11:14 PM GMT-0800'
//   console.log(".......................> now", now);

  return (
    <div>
      <div className="container">RSVP</div>
    </div>
  );
}
