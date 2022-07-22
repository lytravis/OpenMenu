import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SearchDisplay = () => {
  const events = useSelector((state) => Object.values(state.event));

  const [isLoaded] = useState(true);

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
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchDisplay;
