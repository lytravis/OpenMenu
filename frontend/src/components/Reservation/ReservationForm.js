import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./CreateEvent.css";
import { addRsvp } from "../../store/reservation";
import date from "date-and-time";

export default function ReservationForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams();

  const userId = useSelector((state) => state.session.user.id);

  const [loaded, setLoaded] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const validate = () => {
    const validateErrors = [];

    if (!startDate) validateErrors.push("Please provide a start date");
    if (!endDate) validateErrors.push("Please provide an end date");

    return validateErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    const payload = {
      userId: userId,
      eventId,
      startDate,
      endDate,
    };

    dispatch(addRsvp(payload));
    // history.push(`/users/${userId}`);
    history.push("/host");
  };

//   const now = new Date();
//   date.format(now, "hh:mm A [GMT]Z"); // => '11:14 PM GMT-0800'
//   console.log(".......................> now", now);

  return (
    <div className="review-form-container">
      <div className="">
        {validationErrors.length > 0 && (
          <div className="error-msg">
            The following errors were found:
            <ul>
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit} className="">
          <div className="form-inputs"></div>

          <button
            className="reserve-btn"
            disabled={validationErrors.length > 0}
          >
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
}
