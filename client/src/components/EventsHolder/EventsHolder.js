import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

import './EventsHolder.css';

import 'react-slideshow-image/dist/styles.css';

const EventsHolder = ({ event, events }) => {
  // console.log('THIS IS THE EVENT ------> ', Object.values(event));

  // const eventImages = event.map((img) => (
  //   console.log("&&&&&&&&&&&&&&&&&&&& img" , img)
  // ))

  // console.log("**********************", eventImages)

  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // console.log('@##34243242342#$##$', toTitleCase(event.name));
  return (
    <div className="singleEventHolder">
      <Slide
        easing="ease"
        indicators={true}
        autoplay={false}
        cssClass="eventSlide"
        transitionDuration={500}
      >
        {event.Images.map((img) => (
          <Link to={`/events/${event.id}`} key={`Event_slide_${img.id}`}>
            <div
              style={{
                backgroundImage: `url(${img?.url}), url("https://cdn.discordapp.com/attachments/920377762068447282/939220064979271700/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")`,
              }}
              className="eventImageSlide"
            ></div>
          </Link>
        ))}
      </Slide>
      <Link to={`/events/${event.id}`}>
        <div className="eventInfo">
          <div className="eventInfoTopRowBrowse">
            <p className="eventName">{toTitleCase(event.name)}</p>
            <p className="eventTypeBrowse">{event.Type.name}</p>
          </div>
          <div className="eventStats">
            <p className="eventAddress">{`${toTitleCase(
              event.city
            )}, ${toTitleCase(event.state)}`}</p>

            <p>{event.avgCost}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventsHolder;
