import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./CreateEvent.css";
import { addRsvp } from "../../store/reservation";

export default function ReservationForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams();

  const userId = useSelector((state) => state.session.user.id);

  const [loaded, setLoaded] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [guests, setGuests] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);

  const validate = () => {
    const validateErrors = [];

    if (!checkIn) validateErrors.push("Please provide a check in date");
    if (!guests) validateErrors.push("Please provide number of guests");

    return validateErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    const payload = {
      userId: userId,
      eventId,
      checkIn,
      guests,
    };

    dispatch(addRsvp(payload));
    // history.push(`/users/${userId}`);
    history.push("/host");
  };

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
