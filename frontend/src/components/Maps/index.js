import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/maps';
import Maps from './Maps';

const MapContainer = (zoom, events) => {
  const key = useSelector((state) => state.maps.key);
  const dispatch = useDispatch();

  const [latAvg, setLatAvg] = useState(0)
  const [longAvg, setLongAvg] = useState(0)

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  useEffect(() => {
    if (events && events[0] !== undefined) {
        let lat = 0;
        let long = 0;
        events.forEach(event => {
          long += event.longitude;
          lat += event.latitude
    })
    const length = events?.length
    setLatAvg(parseFloat(lat / length))
    setLongAvg(parseFloat(long / length))

  } else {
    setLatAvg(38.747)
    setLongAvg(-98.138)
  }

}, [events])


  if (!key) {
    return null;
  }

  return (
    <Maps apiKey={key} zoom={zoom} events={events} latAvg={latAvg} longAvg={longAvg}/>
  )
};

export default MapContainer;
