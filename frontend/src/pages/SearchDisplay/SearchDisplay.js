import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { getEvents } from '../../store/event';
import { searchResultsType } from '../../store/search';

import './SearchDisplay.css';

const SearchDisplay = () => {
  const dispatch = useDispatch();
  let { searchTerm } = useParams();

  const events = useSelector((state) => Object.values(state.event));
  const searchResults = useSelector((state) => Object.values(state?.search));

  const searchEvents = searchResults[0];

  // console.log('!!!!!!!!!!!!!!!!!!!! searchEvents', searchEvents);

  console.log('%%%%%%%%%%%%% search Term', searchTerm);
  // console.log('%%%%%%%%%%%%% search results', searchResults);
  // console.log('***********Your Events', events);

  const [isLoaded, setIsLoaded] = useState(true);
  const [eventList, setEventList] = useState(events);

  console.log('!!!!!!!!!!!!!!!!!!!!!!!!eventlist', eventList);

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

  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! eventList', eventList);

  useEffect(() => {
    setIsLoaded(false);
    // resetSortedBy();

    if (searchTerm === 'online') {
      sortByOnline();
      // setOnlineEvents('sortSelected');
    } else if (searchTerm === 'fine-dining') {
      sortByFineDining();
      // setFineDining('sortSelected');
    } else if (searchTerm === 'cooking-lessons') {
      sortByCookingLessons();
      // setCookingLessons('sortSelected');
    } else if (searchTerm === 'food-trucks') {
      sortByFoodTrucks();
      // setFoodTrucks('sortSelected');
    }
  }, [searchTerm]);

  useEffect(() => {
    dispatch(getEvents()).then(() => setIsLoaded(true));
    return () => {
      setIsLoaded();
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchResultsType(searchTerm));
  }, [dispatch, searchTerm]);

  useEffect(() => {
    document.title = `Search · OpenMenu`;
  }, []);

  //Scroll to the top of page
  document.documentElement.scrollTop = 0;

  return (
    <>
      {isLoaded && (
        <div className="search-container">
          {eventList?.length > 0 && eventList[0] !== null && (
            <div
              className="search-Info-map-container"
              id="searchResultHeader"
            >
              <div className="search-EventList">
                <div className="search-buttons">
                  {eventList?.length === 1 ? (
                    <h1>{`Search Results - 1 ${searchTerm} event`}</h1>
                  ) : (
                    <h1>{`Search Results - ${eventList?.length} ${searchTerm} events`}</h1>
                  )}
                </div>

                {eventList?.map((event) => (
                  <div
                    className="search-eventContainer"
                    key={`Event_holder_${event?.id}`}
                  >
                    <ImageSlider event={event} key={`Event_${event?.id}`} />
                    <div className="search-eventInfo">
                      <div className="search-eventName">{event?.name}</div>
                      <div className="search-eventDetails searchEventHolder">
                        <div className="eventCardData">
                          <div className="eventDataIcon">
                            <i className="fas fa-info-circle"></i>
                          </div>
                          <div className="search-infodesc">
                            {event?.Type.name}
                          </div>
                        </div>
                        <div className="eventCardData">
                          <div className="eventDataIcon">
                            <i className="fas fa-info-circle"></i>
                          </div>
                          <div className="search-infodesc">
                            {event?.description}
                          </div>
                        </div>
                        <div className="eventCardData">
                          <div className="eventDataIcon">
                            <i class="fas fa-map-marker-alt"></i>
                          </div>
                          <div className="search-infodesc">{`${event?.address}`}</div>
                        </div>
                        <div className="eventCardData">
                          <div className="eventDataIcon">
                            <i class="fas fa-dot-circle"></i>
                          </div>
                          <div className="search-infodesc">{`${event?.city}, ${event?.state}`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* {eventList?.map((event) => ({

<div
className="search-eventContainer"
key={`Event_holder_${event?.id}`}
>
<ImageSlider event={event} key={`event_${event?.id}`} />
</div>


}))} */}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchDisplay;
