import React, { useEffect, useState } from "react";
import { addImage } from "../../store/image";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getEvents } from "../../store/event";

export default function ImageForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams();
  const [url, setUrl] = useState("");

  const event = useSelector((state) => state?.event[eventId]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const img = { url, eventId };
    await dispatch(addImage(img));
    setUrl("");
  };

  useEffect(() => {
    // dispatch(getEvent(eventId));
    dispatch(getEvents());
  }, [dispatch]);
//   console.log("-----------> event", event);
//   console.log("-----------> eventImg", eventId);

  return (
    <div>
      <form>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button onClick={handleUpload}>Upload</button>
      </form>
    </div>
  );
}
