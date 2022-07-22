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

  console.log('%%%%%%%%%%%%%', searchTerm);
  // console.log('***********Your Events', events);

  const [isLoaded, setIsLoaded] = useState(true);
  const [searchString, setSearchString] = useState(`${searchTerm}`);

  console.log('***********Your searchString', searchString);

  useEffect(() => {
    dispatch(getEvents()).then(() => setIsLoaded(true));
    return () => {
      setIsLoaded();
    };
  }, [dispatch]);

  useEffect(() => {
    if (searchString !== '') {
      dispatch(searchResultsType(searchTerm));
    }
  }, [dispatch, searchString, searchTerm]);

  useEffect(() => {
    document.title = `Search · OpenMenu`;
  }, []);

  //Scroll to the top of page
  document.documentElement.scrollTop = 0;

  return (
    <>
      {isLoaded && (
        <div className="search-container">
          {events?.length > 0 && events[0] !== null && (
            <div
              className="search-dogsInfo-map-container"
              id="searchResultHeader"
            >
              <div className="search-EventList">
                <div className="search-buttons">
                  {events?.length === 1 ? (
                    <h1>{`Search Results - 1 event`}</h1>
                  ) : (
                    <h1>{`Search Results - ${events?.length} events`}</h1>
                  )}
                </div>
                {events?.map((event) => (
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
