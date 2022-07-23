import React from 'react';
import { GoogleMap, useJsApiLoader, Marker  } from '@react-google-maps/api';
import { useHistory } from "react-router-dom";

import CustomMarker from "./customIcon.png"

const containerStyle = {
  width: '100%',
  height: '100%',
};



const Maps = ({ apiKey, zoom, events, latAvg, longAvg }) => {
  const history = useHistory();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const goToEventPage = eventId => {
    history.push(`/events/${eventId}`)
}

const center = {
  lat: latAvg,
  lng: longAvg,
};



  return (
    <>
    {isLoaded && (
          <>
              <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={zoom}
              >
                  {events?.map(event =>
                      <Marker
                          key={`${event.id}_map_spot`}
                          position={{lat: event.latitude, lng: event.longitude}}
                          icon={{
                              url: CustomMarker,
                              labelOrigin: new window.google.maps.Point(14, -10),
                              scaledSize: new window.google.maps.Size(30, 26),
                          }}
                          label={{text: `${event.name}`, color: "#EA4335", textShadow: "0 0 3px #000", marginBottom: "40px"}}
                          onClick={() => goToEventPage(event.id)}
                      />

                  )}
              </GoogleMap>
          </>
    )}
  </>
  );
};

export default React.memo(Maps);
