import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HostCard from '../Card/HostCard';
import ReservationCard from '../Card/ReservationCard';

import './UserEvents.css';

const UserEvents = ({ hostedEvents, reservations, user, eventId }) => {
  // const [hostEvents, setHostEvents] = useState(hostedEvents);
  // const [rsvpEvents, setRsvpEvents] = useState([]);
  const [showRsvpEvents, setShowRsvpEvents] = useState(false);

  // console.log('$$$$$ RSVP', reservations);

  // const tester = reservations?.map((el) => el.Event);
  // console.log('#################', tester);

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
                      When you’re ready to start planning your next experience,
                      click
                    </p>
                    <Link to="/events" className="noEventsBrowse">
                      here
                    </Link>
                    <p className="noEventText"> to browse.</p>
                  </div>
                  <img
                    className="noEvents"
                    src="https://cdn.discordapp.com/attachments/920377762068447282/989333650812313630/OpenMenu_1.png"
                    alt="OpenMenu logo"
                  />
                </>
              ) : (
                <div className="eventsContainer">
                  {hostedEvents.map((event, index) => (
                    <HostCard

                      event={event}
                      hosted={true}
                      key={`Your_events_${event.id}_${index}`}
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
                    You don’t have any reservations yet—but when you do, you’ll
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
                  {reservations?.map((event, index) => (
                    <ReservationCard
                      event={event}
                      hosted={false}
                      key={`Your_reservations_${event.id}_${index}`}
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

export default UserEvents;
