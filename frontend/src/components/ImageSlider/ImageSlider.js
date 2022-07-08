import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

import './ImageSlider.css';

import 'react-slideshow-image/dist/styles.css';

const ImageSlider = ({ event }) => {
  // console.log('THIS IS THE EVENT ------> ', Object.values(event));

  // const eventImages = event.map((img) => (
  //   console.log("&&&&&&&&&&&&&&&&&&&& img" , img)
  // ))

  // console.log("**********************", eventImages)

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
    </div>
  );
};

export default ImageSlider;
