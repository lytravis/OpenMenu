import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { updateEvent, getEvents } from '../../store/event';
import { getTypes } from '../../store/type';
import { getImages, addImage } from '../../store/image';

import './EditEvent.css';

// import '../pages/CreateEvent/CreateEvent.css';
// client/src/pages/CreateEvent/CreateEvent.css
const EditEvent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams();
  // const userId = useSelector((state) => state.session.user.id);
  const hostId = useSelector((state) => state.session.user.id);
  const images = useSelector((state) => Object.values(state.image));
  // const events = useSelector((state) => Object.values(state.event));
  const eventTypes = useSelector((state) => Object.values(state.type));
  const event = useSelector((state) => state?.event[eventId]);
  const eventImages = images.filter((image) => image.eventId == event.id);

  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [eventErrorId, setEventErrorId] = useState('noEventError');
  const [eventErrorMessage, setEventErrorMessage] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [imgs, setImgs] = useState('');

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

  // console.log('%%%%%%%%', eventImages[0]?.url);
  // console.log('%!!!!!!!!!!!!!!!!!!!!!!event', event.Images);
  // console.log('%!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', eventId);

  const updateProfilePic = async (e) => {
    e.preventDefault();

    const regex =
      /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    // if (profilePic.length > 0 && !regex.test(profilePic)) {
    //   setProfilePicErrorId('updatePicError');
    //   setPicErrorMessage('Please add a valid Image URL.');
    //   return;
    // }

    const data = await dispatch(addImage(event.id, image1));
    // if (data[0] === 'Error') {
    //   setProfilePicErrorId('updatePicError');
    //   setPicErrorMessage('An error occured. Refresh the page and try again.');
    //   return;
    // } else {
    //   setProfilePicErrorId('noUpdatePicError');
    //   setPicErrorMessage('');
    //   setShowPicForm(false);
    // }
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    history.push(`/manage`);
  };

  const validate = () => {
    const validateErrors = [];

    if (!name) validateErrors.push('Please provide an event name');
    if (!description)
      validateErrors.push('please provide an event description');
    if (!address) validateErrors.push('please provide an event address');
    if (!city) validateErrors.push('please provide an event city');
    if (!state) validateErrors.push('please provide an event state');
    if (!zipCode) validateErrors.push('please provide an event zipCode');
    // if (!latitude) validateErrors.push("please provide an event latitude");
    // if (!longitude) validateErrors.push("please provide an event longitude");

    return validateErrors;
  };

  useEffect(() => {
    dispatch(getEvents()).then(() => setIsLoaded(true));
    return () => {
      setIsLoaded();
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getImages());
  }, [dispatch]);

  useEffect(() => {
    setName(event?.name);
    setDescription(event?.description);
    setAddress(event?.address);
    setCity(event?.city);
    setState(event?.state);
    setZipCode(event?.zipCode);
    setAvgCost(event?.avgCost);
    // setLatitude(event?.latitude);
    // setLongitude(event?.longitude);
    setTypeId(event?.typeId);

    // let imgs = event?.Images.map((image) => {

    //   return { url: image };

    // });

    setImgs(images);
  }, [event]);

  let test = event?.Images.map((image) => {
    return { url: image };
  });

  console.log('******** this is imgs', test);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    const payload = {
      userId: hostId,
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

    const payload2 = {
      eventId,
      url: image1,
    };

    await dispatch(updateEvent(payload, eventId));
    await dispatch(addImage(payload2));
    // history.push(`/events/${eventId}/edit`);
    history.push(`/events/${eventId}`);
  };

  return (
    <>
      {isLoaded && (
        <div className="eventloadContainer">
          <h1 id="editYourEvent">Update Your Event</h1>
          <div className="editFormAndImg">
            <div className="eventloadFormsContainer">
              <div>
                <form
                  className="editEventForm"
                  autoComplete="off"
                  onSubmit={handleUpdate}
                >
                  <div className="editorForm">
                    <div className="formInputSection">
                      <div className="fieldSection">
                        <h3>{`${event?.name}'s Information`}</h3>
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
                            name="zipCode"
                            type="input"
                            required
                            maxLength="50"
                            autoComplete="off"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="formInputSection" id="imageUploadSection">
                      <div className="fieldSection">
                        <h3 className="imagesHeader">Images</h3>
                        <div className="imageUploadContainer">
                          <div className="formField">
                            <input
                              // id={signUpEmailError}
                              name="profilePic"
                              type="text"
                              required
                              autoComplete="off"
                              maxLength="255"
                              value={image1}
                              onChange={(e) => setImage1(e.target.value)}
                            />
                            <label>Image URL</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="eventloadButtons">
                    <button type="submit">Edit Event</button>
                    <button
                      className="formButton"
                      id="clearPuploadForm"
                      onClick={cancelEdit}
                    >
                      Cancel Edit
                    </button>
                  </div>
                  <div className="addEventError" id={eventErrorId}>
                    <div>!</div>
                    <span>{eventErrorMessage}</span>
                  </div>
                </form>
              </div>
            </div>
            <span className="edit-img">
              <img
                src="https://cdn.discordapp.com/attachments/920377762068447282/993996688391929867/unknown.png"
                alt="cooking img"
              />
            </span>
            <div className="accountFormContainer">
              <div className="topRowAccount">
                {/* <div className="accountHeader">Profile picture</div> */}
                {/* <div className="editAccountButton"
                onClick={resetPictureForm}>
                  Cancel
                </div> */}
              </div>
              {/* <div className="accountInfo">Enter a valid Image URL.</div> */}
              <form className="accountForm" onSubmit={updateProfilePic}>
                <div className="nameInputs">
                  {/* <div className="accountFormInputContainer extraLongInput"> */}
                    {/* <label>Image URL</label> */}
                    <input
                      name="image1"
                      type="input"
                      maxLength="255"
                      value={image1}
                      onChange={(e) => setImage1(e.target.value)}
                    />
                  {/* </div> */}
                </div>
                <div className="accountFormUpdateErrorContainer">
                  {/* <button type="submit">Save</button> */}
                  {/* <div className="updateAccountError" id={profiePicErrorId}>
                    {picErrorMessage}
                  </div> */}
                </div>
              </form>
            </div>
          </div>

          {showModal && (
            <div className="loginModal">
              <div>
                <img
                  className="loadingGif"
                  src="https://cdn.discordapp.com/attachments/920377762068447282/993990185295548587/gif-animations-replace-loading-screen-14.gif"
                  alt="loading gif"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EditEvent;
