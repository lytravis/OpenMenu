import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { getEvents } from '../../store/event';
import { searchResultsType } from '../../store/search';

const SearchDisplay = () => {
  const dispatch = useDispatch();
  let { searchTerm } = useParams();

  const events = useSelector((state) => Object.values(state.event));
  const searchResults = useSelector((state) => Object.values(state?.search));

  const searchEvents = searchResults[0]

  console.log('!!!!!!!!!!!!!!!!!!!! searchEvents', searchEvents);

  // const tester = searchEvents.map((event) => console.log(event.name));

  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!TESTER', tester);

  // console.log('%%%%%%%%%%%%% search Term', searchTerm);
  // console.log('%%%%%%%%%%%%% search results', searchResults);
  // console.log('***********Your Events', events);

  const [isLoaded, setIsLoaded] = useState(true);
  // const [searchString, setSearchString] = useState(`${searchTerm}`);

  // console.log('***********Your searchString', searchString);

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
          {searchEvents?.length > 0 && searchEvents[0] !== null && (
            <div
              className="search-dogsInfo-map-container"
              id="searchResultHeader"
            >
              <div className="search-EventList">
                <div className="search-buttons">
                  {searchEvents?.length === 1 ? (
                    <h1>{`Search Results - 1 event`}</h1>
                  ) : (
                    <h1>{`Search Results - ${searchEvents?.length} events`}</h1>
                  )}
                </div>
                {searchEvents?.map((event) => (
                  <div
                    className="search-eventContainer"
                    key={`Event_holder_${event?.id}`}
                  >
                    <ImageSlider event={event} key={`event_${event?.id}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchDisplay;
