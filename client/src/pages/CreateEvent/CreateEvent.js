import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addEvent } from '../../store/event';
import { getTypes } from '../../store/type';

import './CreateEvent.css';

const CreateEvent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const userId = useSelector((state) => state.session.user.id);
  const eventTypes = useSelector((state) => Object.values(state.type));

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [avgCost, setAvgCost] = useState('');
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  const [typeId, setTypeId] = useState(1);
  const [validationErrors, setValidationErrors] = useState([]);
  const [eventErrorId, setEventErrorId] = useState('noEventError');
  const [eventErrorMessage, setEventErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [addressErrorId, setAddressErrorId] = useState('noAddressError');
  const [addressErrorBackground, setAddressErrorBackground] = useState(
    'classNoAddressError'
  );

  const validate = () => {
    const validateErrors = [];

    if (!name) validateErrors.push('Please provide an event name');
    if (!description)
      validateErrors.push('please provide an event description');
    if (!address) validateErrors.push('please provide an event address');
    if (!city) validateErrors.push('please provide an event city');
    if (!state) validateErrors.push('please provide an event state');
    if (!zipCode) validateErrors.push('please provide an event zipCode');
    if (!avgCost)
      validateErrors.push('please provide the average cost per person');
    // if (!latitude) validateErrors.push("please provide an event latitude");
    // if (!longitude) validateErrors.push("please provide an event longitude");

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
      avgCost,
      // latitude,
      // longitude,
      typeId,
    };

    dispatch(addEvent(payload));
    // history.push(`/users/${userId}`);
    history.push('/events');
  };

  const clearForm = (e) => {
    e.preventDefault();
    setName('');
    setTypeId('');
    setDescription('');
    setAvgCost('');
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
    setAddressErrorId('noAddressError');
    setAddressErrorBackground('classNoAddressError');
    setEventErrorId('noEventError');
    setEventErrorMessage('');
  };

  return (
    <div className="eventloadContainer">
      <h1>HOST AN EXPERIENCE ON OPENMENU</h1>
      <div className="formAndIntro">
        <h2>
          Earn money leading people on activities you love. What’s an
          experience? It’s an activity that goes beyond the typical tour or
          class, designed and led by locals all over the world. Show off your
          city, craft, cause, or culture by hosting an experience. Create an
          activity, your way Join a growing community of curious people Hosts
          are chefs, artists, DJs, and other experts in their fields. They make
          people from around the world feel connected, and give access to unique
          places and activities that can’t be found anywhere else. We’ve got
          your back, every step of the way Resources like articles and insights
          dedicated to your hosting needs, 24/7 customer support for you and
          your guests, exposure for your experience, and much more.
        </h2>
        <div className="eventloadFormsContainer">
          <div>
            <form
              className="eventloadForm"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="formInputSection">
                <div className="fieldSection">
                  <h3>Event Information</h3>
                  <div className="eventLoadField">
                    <label>Name</label>
                    <input
                      name="name"
                      type="input"
                      maxLength="40"
                      required
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="eventLoadField">
                    <label>Description</label>
                    <textarea
                      name="description"
                      type="input"
                      required
                      autoComplete="off"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="eventLoadField" id="stateSelector">
                    <label>Type</label>
                    <select
                      value={typeId}
                      onChange={(e) => setTypeId(e.target.value)}
                    >
                      {eventTypes.map((type) => (
                        <option value={type.id} key={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="eventLoadField" id="stateSelector">
                    <label>Average Cost Per Person</label>
                    <select
                      value={avgCost}
                      onChange={(e) => setAvgCost(e.target.value)}
                      className={addressErrorBackground}
                    >
                      <option value="$">$</option>
                      <option value="$$">$$</option>
                      <option value="$$$">$$$</option>
                      <option value="$$$$">$$$$</option>
                    </select>
                  </div>
                </div>
                <div className="fieldSection">
                  <h3>{` `}.</h3>
                  <div className="eventLoadField">
                    <label>Street Address</label>
                    <input
                      className={addressErrorBackground}
                      name="address"
                      type="input"
                      maxLength="255"
                      required
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="eventLoadField">
                    <label>City</label>
                    <input
                      className={addressErrorBackground}
                      name="city"
                      type="input"
                      required
                      maxLength="50"
                      autoComplete="off"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="eventLoadField">
                    <label>State</label>
                    <input
                      className={addressErrorBackground}
                      name="state"
                      type="input"
                      required
                      maxLength="50"
                      autoComplete="off"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="eventLoadField">
                    <label>Zip Code</label>
                    <input
                      className={addressErrorBackground}
                      name="zipCode"
                      type="input"
                      required
                      maxLength="50"
                      autoComplete="off"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>

                  <div className="addEventError" id={addressErrorId}>
                    <div>!</div>
                    <span>Invalid address.</span>
                  </div>
                </div>
              </div>
              <div className="formInputSection" id="imageUploadSection">
                <div className="fieldSection">
                  <h3 className="imagesHeader">Images</h3>
                  <div className="imageUploadContainer"></div>
                </div>
              </div>
              <div className="eventloadButtons">
                <button type="submit">Host Event</button>
                <button
                  className="formButton"
                  id="cleareventloadForm"
                  onClick={clearForm}
                >
                  Clear Form
                </button>
              </div>
              <div className="addEventError" id={eventErrorId}>
                <div>!</div>
                <span>{eventErrorMessage}</span>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CreateEvent;

