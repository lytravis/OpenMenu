import React, { useState, useEffect } from 'react';
import EventsHolder from '../EventsHolder/EventsHolder';
import './Browse.css';

const Browse = ({ events }) => {
  const [eventList, setEventList] = useState(events);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortBy, setSortBy] = useState('all-events');

  const [allEvents, setAllEvents] = useState('');
  const [onlineEvents, setOnlineEvents] = useState('');
  const [fineDining, setFineDining] = useState('');
  const [cookingLessons, setCookingLessons] = useState('');
  const [foodTrucks, setFoodTrucks] = useState('');

  const sortByAllEvents = async () => {
    const sortedEvents = events.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    await setEventList(sortedEvents);
    setIsLoaded(true);
  };

  const sortByOnline = async () => {
    const sortedEvents = events.filter((event) => event.Type.name === 'Online');
    await setEventList(sortedEvents);
    setIsLoaded(true);
  };
  const sortByFineDining = async () => {
    const sortedEvents = events.filter(
      (event) => event.Type.name === 'Fine Dining'
    );
    await setEventList(sortedEvents);
    setIsLoaded(true);
  };
  const sortByCookingLessons = async () => {
    const sortedEvents = events.filter(
      (event) => event.Type.name === 'Cooking Lesson'
    );


    await setEventList(sortedEvents);
    setIsLoaded(true);
  };
  const sortByFoodTrucks = async () => {
    const sortedEvents = events.filter(
      (event) => event.Type.name === 'Food Truck'
    );

    await setEventList(sortedEvents);
    setIsLoaded(true);
  };


  const resetSortedBy = async () => {
    setAllEvents('');
    setOnlineEvents('');
    setFineDining('');
    setCookingLessons('');
    setFoodTrucks('');
  };

  useEffect(() => {
    setIsLoaded(false);
    resetSortedBy();

    if (sortBy === 'all-events') {
      sortByAllEvents();
      setAllEvents('sortSelected');
    } else if (sortBy === 'online') {
      sortByOnline();
      setOnlineEvents('sortSelected');
    } else if (sortBy === 'fine-dining') {
      sortByFineDining();
      setFineDining('sortSelected');
    } else if (sortBy === 'cooking-lessons') {
      sortByCookingLessons();
      setCookingLessons('sortSelected');
    } else if (sortBy === 'food-trucks') {
      sortByFoodTrucks();
      setFoodTrucks('sortSelected');
    }
  }, [sortBy]);

  return (
    <>
      <div className="sortByContainer">
        <div className="sortHeader">Sort by type:</div>
        <div
          className={`sortCategory ${allEvents}`}
          onClick={() => setSortBy('all-events')}
        >
          All Experiences
        </div>
        <div
          className={`sortCategory ${onlineEvents}`}
          onClick={() => setSortBy('online')}
        >
          Online Experiences
        </div>
        <div
          className={`sortCategory ${fineDining}`}
          onClick={() => setSortBy('fine-dining')}
        >
          Fine Dining
        </div>
        <div
          className={`sortCategory ${cookingLessons}`}
          onClick={() => setSortBy('cooking-lessons')}
        >
          Cooking Lessons
        </div>
        <div
          className={`sortCategory ${foodTrucks}`}
          onClick={() => setSortBy('food-trucks')}
        >
          Food Trucks
        </div>
      </div>
      {isLoaded && (
        <div className="allEventsContainer">
          {eventList.map((event) => (
            <EventsHolder
              event={event}
              events={events}
              key={`Event_Browse_${event?.id}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Browse;

// const Card = ({ src, title, description, price }) => {
//   return (
//     <div className="card">
//       <img src={src} alt="" />
//       <div className="card__info">
//         <h2>{title}</h2>
//         <h4>{description}</h4>
//         <h3>{price}</h3>
//       </div>
//     </div>
//   );
// };
