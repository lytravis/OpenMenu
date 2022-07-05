import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

import './HostedEvents.css';

const HostedEvents = ({ hostedEvents, reservations, user }) => {
  // const [hostEvents, setHostEvents] = useState(hostedEvents);
  // const [rsvpEvents, setRsvpEvents] = useState([]);
  const [showRsvpEvents, setShowRsvpEvents] = useState(false);

  return (
    <div>
      <>
        <div className="navHeaderContainer">
          <div className="navHeader">
            <div className="profileNav">
              <h3
                id={!showRsvpEvents ? 'keepUnderline' : null}
                onClick={() => setShowRsvpEvents(false)}
              >
                Hosted Events
              </h3>
              <h3
                id={showRsvpEvents ? 'keepUnderline' : null}
                onClick={() => setShowRsvpEvents(true)}
              >
                Reservations
              </h3>
            </div>
          </div>
        </div>
        <div className="eventsForUserContainer">
          {!showRsvpEvents && (
            <>
              {hostedEvents.length === 0 ? (
                <>
                  <div className="eventTextContainer">
                    <p className="eventText">
                      When you’re ready to start planning your next experience, click
                    </p>
                    <Link to="/browse" className="noEventsBrowse">
                      here
                    </Link>
                    <p className="eventText"> to browse.</p>
                  </div>
                  <img
                    className="event"
                    src="https://cdn.discordapp.com/attachments/920377762068447282/989333650812313630/OpenMenu_1.png"
                    alt="OpenMenu logo"
                  />
                </>
              ) : (
                <div className="eventsContainer">
                  {hostedEvents.map((walk, index) => (
                    <Card

                    />
                  ))}
                </div>
              )}
            </>
          )}
          {showRsvpEvents && (
            <>
              {reservations.length === 0 ? (
                <>
                  <p className="eventText">
                    You don’t have any past walks yet—but when you do, you’ll
                    find them here.
                  </p>
                  <img
                    className="event"
                    src="https://cdn.discordapp.com/attachments/920377762068447282/989333650812313630/OpenMenu_1.png"
                    alt="OpenMenu logo"
                  />
                </>
              ) : (
                <div className="eventsContainer">
                  {reservations.map((walk, index) => (
                    <Card

                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default HostedEvents;
