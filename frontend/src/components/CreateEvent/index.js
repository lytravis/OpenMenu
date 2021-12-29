import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./CreateEvent.css";
import { addEvent } from "../../store/event";
import { getTypes } from "../../store/type";

function CreateEvent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const userId = useSelector((state) => state.session.user.id);
  const events = useSelector((state) => Object.values(state.event));
  const eventTypes = useSelector((state) => Object.values(state.type));

  // console.log("---------> eventTypes", eventTypes);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [typeId, setTypeId] = useState(1);
  const [validationErrors, setValidationErrors] = useState([]);

  const validate = () => {
    const validateErrors = [];

    if (!name) validateErrors.push("Please provide an event name");
    if (!description)
      validateErrors.push("please provide an event description");
    if (!address) validateErrors.push("please provide an event address");
    if (!city) validateErrors.push("please provide an event city");
    if (!state) validateErrors.push("please provide an event state");
    if (!zipCode) validateErrors.push("please provide an event zipCode");
    if (!latitude) validateErrors.push("please provide an event latitude");
    if (!longitude) validateErrors.push("please provide an event longitude");

    return validateErrors;
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    const payload = {
      userId: userId,
      name,
      description,
      address,
      city,
      state,
      zipCode,
      latitude,
      longitude,
      typeId,
    };

    dispatch(addEvent(payload));
    // history.push(`/users/${userId}`);
    history.push("/host");
  };

  // console.log("-----> ****events****", events);
  // console.log("-----> userId", userId);

  return (
    <div className="add-event-container">
      <div className="add-event">
        <h2>Add an Event</h2>
        {validationErrors.length > 0 && (
          <div>
            The following errors were found:
            <ul>
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit} className="add-event">
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Event Name"
            />
          </div>
          <div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              placeholder="Event Description"
            />
          </div>
          <div>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
              placeholder="Event Address"
            />
          </div>
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              type="text"
              placeholder="Event City"
            />
          </div>
          <div>
            <input
              onChange={(e) => setState(e.target.value)}
              value={state}
              type="text"
              placeholder="Event State"
            />
          </div>
          <div>
            <input
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
              type="text"
              placeholder="Event Zip Code"
            />
          </div>
          <div>
            <input
              onChange={(e) => setLatitude(e.target.value)}
              value={latitude}
              type="text"
              placeholder="Event Latitude"
            />
          </div>
          <div>
            <input
              onChange={(e) => setLongitude(e.target.value)}
              value={longitude}
              type="text"
              placeholder="Event Longitude"
            />
          </div>
          <div>
            <label>Type</label>
            <select value={typeId} onChange={(e) => setTypeId(e.target.value)}>
              {eventTypes.map((type) => (
                <option value={type.id} key={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <button className="submit-button" type="submit">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
