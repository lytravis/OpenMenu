import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addRSVP } from "../../store/reservation";
import "./ReservationForm.css";




 const ReservationForm = () => {
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

    dispatch(addRSVP(payload));
    // history.push(`/users/${userId}`);
    history.push("/manage");
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
          <div className="form-inputs">
            <div>
              <input
                className="rsvp-input"
                type="datetime-local"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
                required
              />
            </div>
            <div>
              <input
                className="rsvp-input"
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </div>
          </div>

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

export default ReservationForm
