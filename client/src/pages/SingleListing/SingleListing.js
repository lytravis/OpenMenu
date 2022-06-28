import React, { useState, useEffect } from 'react';
import './SingleListing.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

//   .item{Item $}*12

const SingleListing = () => {
  const { eventId } = useParams();
  const event = useSelector((state) => state?.event[eventId]);
  const events = useSelector((state) => Object.values(state.event));

  console.log('hello----->', events);

  return (
    <div className="sl-container">
      <div className="sl-title">Item 1</div>
      <div className="sl-miniheader">Item 2</div>
      <div className="sl-photogrid">Item 3</div>
      <div className="sl-hostedby">Item 4</div>
      <div className="sl-checkinfo">Item 5</div>
      <div className="sl-bulletinfo">Item 6</div>
      <div className="sl-desciption">Item 7</div>
      <div className="sl-reviews">Item 8</div>
      <div className="sl-map">Item 9</div>
      {/* <div className="item">Item 10</div>
      <div className="item">Item 11</div>
      <div className="item">Item 12</div>
      <div className="item">Item 13</div>
      <div className="item">Item 14</div> */}
    </div>
  );
};

export default SingleListing;
