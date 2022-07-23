import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/maps';
import Maps from './Maps';


import { getEvents } from '../../store/event';

const MapContainer = (zoom) => {

  const key = useSelector((state) => state.maps.key);
  const events = useSelector((state) => Object.values(state.event));

  const dispatch = useDispatch();

  const [latAvg, setLatAvg] = useState(0)
  const [longAvg, setLongAvg] = useState(0)


  console.log('!!!!!!!!!!!!!!!!!! MapContainer events', events);



  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch]);

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
