import React from 'react';
import { GoogleMap, useJsApiLoader, Marker  } from '@react-google-maps/api';
import { useHistory } from "react-router-dom";

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 38.9072,
  lng: 77.0369,
};

const Maps = ({ apiKey, zoom, events, latAvg, longAvg }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        />
      )}
    </>
  );
};

export default React.memo(Maps);
